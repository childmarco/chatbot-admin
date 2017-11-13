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
          line_user_id = event['source'].fetch('type', nil) == "user" ? event['source']['userId'] : nil
          logger.info(line_user_id)
          request_event = event['type'] == "postback" ? event['postback']['data'] : nil
          
          if line_user_id.present?
            if request_event.present? || User.find_by(lineId: line_user_id).present?
              query = Rack::Utils.parse_nested_query(event['postback']['data'])
              logger.info(query)
              
              case query["action"]
                when "update_line_user"
                  logger.info("update_line_user")
                  update__line_user(event, line_user_id)
                # when "reconfirm_phonenumber" then
                #   logger.info("reconfirm_phonenumber")
                #   reconfirm_phonumber(event)
                when "send_request" then
                  logger.info("send_request")
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
                if event.message['text'] =~ /(^\d{10}$|^\d{11}$|^\d{3}-\d{4}-\d{4}$)/
                  phone_number     = $1.gsub("-", "").strip
                  postback_message = "action=update_line_user&userid=#{line_user_id}&phonenumber=#{phone_number}"
                  reply_message    = ApiUtilities::confirm_button("#{phone_number}ですね？", "#{postback_message}&res=yes", "#{postback_message}&res=no")
                else
                  reply_message = ApiUtilities::check_content("ご利用いただきありがとうございます。\nアカウント作成のため電話番号を入力してください。")
                end
              else
                reply_message = ApiUtilities::check_content("申し訳ございません。\n現在未対応です。")
            end
            client.reply_message(event['replyToken'], reply_message)
        end
      end
      
      def update__line_user(event, line_user_id)
        query   = Rack::Utils.parse_nested_query(event['postback']['data'])
        user_id = query["userid"]
        
        if query["res"] == "no"
          reply_message = ApiUtilities::check_content("再度、電話番号を入力してください。")
        else
          User.save(
            lineId:      line_user_id,
            email:       "line@line.co.jp",
            phoneNumber: query["phonenumber"],
            firstName:   "lineUser",
            lastName:    "lineUser",
            pass:        Digest::SHA1.hexdigest(MY_APPLICATIONS['salt'] + "admin"),
            role:        "admin"
          )
          reply_message = ApiUtilities::check_content("このままご予約を開始しますか？")
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