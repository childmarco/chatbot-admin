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
          error 400 do
            'Bad Request'
          end
        end
        
        events = client.parse_events_from(body)
        
        logger.info(events)
        
        events.each { |event|
  
  
          logger.info(event)
          
          
          line_user_id  = event['source'].fetch('type', nil) == "user" ? event['source']['userId'] : nil
          logger.info(line_user_id)
          
          
          request_event = event['type'] == "postback" ? event['postback']['data'] : nil
          
          logger.info(event[:type])
          logger.info(event['type'])
          logger.info(event["type"])

          # logger.info(event.fetch('type', nil))
          logger.info(request_event)
          

          
          if line_user_id.present?
            if request_event.present?
              query = Rack::Utils.parse_nested_query(event['postback']['data'])
              
              logger.info(query)
              
              case query["action"]
                when "reconfirm_phonenumber" then
                  reconfirm_phonumber(event)
                when "send_request" then
                  send_request(event)
                else
                  logger.info("ERROR")
              end
            else
              
              logger.info("initial")
              
              initial_reply(event, line_user_id)
            end
          end
        }
        
        head :ok
      end
      
      def initial_reply(event, line_user_id)
        case event
          when Line::Bot::Event::Message
            case event.type
              when Line::Bot::Event::MessageType::Text
                
                if User.find_by(lineId: line_user_id).nil?
                  if event.message['text'] =~ /(^\d{10}$|^\d{11}$|^\d{3}-\d{4}-\d{4}$)/
                    phone_number  = $1.gsub("-", "").strip
                    postback_yes  = "action=update_line_user&userid=#{line_user_id}&phonenumber=#{phone_number}"
                    postback_no   = "action=reconfirm_phonenumber&userid#{line_user_id}&phonenumber=reconfirm"
                    reply_message = ApiUtilities::confirm_button("#{phone_number}ですね？", postback_yes, postback_no)
                  else
                    reply_message = ApiUtilities::check_content("ご利用いただきありがとうございます。\nアカウント作成のため電話番号を入力してください。")
                  end
                else
                  reply_message = ApiUtilities::list_button
                end
              else
                reply_message = ApiUtilities::check_content("申し訳ございません。\n現在未対応です。")
            end
            client.reply_message(event['replyToken'], reply_message)
        end
      end
      
      def reconfirm_phonumber(event)
        query = Rack::Utils.parse_nested_query(event[:postback][:data])
        action  = query["action"]
        user_id = query["userid"]
        
        if query["phonenumber"] == "reconfirm"
          reply_message = ApiUtilities::check_content("再度、電話番号を入力してください。")
        
        else
          logger.info(query)
        end
        client.reply_message(event['replyToken'], reply_message)
      end
      
      def send_request(event)
        logger.info(event)
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