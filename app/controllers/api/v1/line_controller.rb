module Api
  module V1
    class LineController < ApplicationController
      # protect_from_forgery with: :exception
      # protect_from_forgery with: :null_session
      # protect_from_forgery :except => [:callback]
      skip_before_filter :verify_authenticity_token
      
      require 'line/bot'
      
      
      def index
        @user = User.all
        render json: @user
      end
      
      def show
        render json: User.find(params[:id])
      end
      
      
      def client
        @client ||= Line::Bot::Client.new { |config|
          config.channel_secret = ENV["LINE_CHANNEL_SECRET"]
          config.channel_token  = ENV["LINE_CHANNEL_TOKEN"]
        }
      end
      
      def callback
        body      = request.body.read
        signature = request.env['HTTP_X_LINE_SIGNATURE']
        
        unless client.validate_signature(body, signature)
          logger.info("Hello signature 2")
          error 400 do
            'Bad Request'
          end
        end
        
        # ここでDB接続して会話内容をDBに更新
        events = client.parse_events_from(body)
        
        events.each { |event|
          case event
            when Line::Bot::Event::Message
              case event.type
                #テキストメッセージが送られた場合、そのままおうむ返しする
                when Line::Bot::Event::MessageType::Text
                  logger.info(event)
                  reply_message = ApiUtilities::check_content(event.message['text'])
                  
                  # message = {
                  #   type: 'text',
                  #   text: event.message['text']
                  # }
              end
              # client.reply_message(event['replyToken'], message)
              client.reply_message(event['replyToken'], reply_message)
          end
        }
        
        logger.info(events)
        
        head :ok
        # render :nothing, status: :ok
      end
      
      private
      def set_user
        @user = User.find(params[:id])
      end
      
      def user_params
        params.require(:user).permit(:email, :username, :pass, :role)
      end
    end
  end
end