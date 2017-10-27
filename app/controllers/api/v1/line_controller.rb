module Api
  module V1
    class LineController < ApplicationController
      # protect_from_forgery with: :exception
      # protect_from_forgery with: :null_session
      skip_before_filter :verify_authenticity_token
      
      
      # require 'line/bot'
      # require 'net/http'
      
      def client
        @client = Line::Bot::Client.new { |config|
          config.channel_token  = ENV['LINE_CHANNEL_ID']
          config.channel_secret = ENV['LINE_CHANNEL_SECRET']
        }
      end
      
      def callback
        body = request.body.read
        
        signature = request.env['HTTP_X_LINE_SIGNATURE']
        unless client.validate_signature(body, signature)
          error 400 do
            'Bad Request'
          end
        end
        
        # event      = params["events"][0]
        # event_type = event["type"]
        
        # 含まれるコンテンツorPostedRequestによって処理を振り分ける
        
        
        events = client.parse_events_from(body)
        
        
        logger.info("HELLO")
        logger.info(events)
        
        
        events = client.parse_events_from(body)
        events.each { |event|
          case event
            when Line::Bot::Event::Message
              case event.type
                when Line::Bot::Event::MessageType::Text
                  message = {
                    type: 'text',
                    text: event.message['text']
                  }
                  client.reply_message(event['replyToken'], message)
                when Line::Bot::Event::MessageType::Image, Line::Bot::Event::MessageType::Video
                  response = client.get_message_content(event.message['id'])
                  tf       = Tempfile.open("content")
                  tf.write(response.body)
              end
          end
        }
        
        "OK"
          
          # events.each { |event|
          #   case event
          #     when Line::Bot::Event::Message
          #       case event.type
          #         when Line::Bot::Event::MessageType::Text
          #
          #           logger.info("Hello startXXXX")
          #           reply_message = ApiUtilities::check_content(event.message['text'])
          #           logger.info("Hello startYYYY")
          #           message = {
          #             type: 'text',
          #             text: event.message['text']
          #           }
          # client.reply_message(event['replyToken'], reply_message)
          # when Line::Bot::Event::MessageType::Image, Line::Bot::Event::MessageType::Video
          #   response = client.get_message_content(event.message['id'])
          #   tf       = Tempfile.open("content")
          #   tf.write(response.body)
          # end
          # end
          # }
      end
      
      private
      def set_user
      
      
      end
      
      def user_params
      
      
      end
    end
  end
end
