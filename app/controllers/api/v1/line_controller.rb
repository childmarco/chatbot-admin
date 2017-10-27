module Api
  module V1
    class LineController < ApplicationController
      # protect_from_forgery with: :exception
      protect_from_forgery with: :null_session
      skip_before_filter :verify_authenticity_token
      
      def index
        @user = User.all
        render json: @user
      end
      
      def show
        render json: User.find(params[:id])
      end
      
      def client
  
        logger.info("Hello client start")
        client = Line::Bot::Client.new { |config|
          config.channel_token    = ENV['LINE_CHANNEL_ID']
          config.channel_secret   = ENV['LINE_CHANNEL_SECRET']
          config.channel_endpoint = "https://api.line.me/v2/bot/message/reply"
        }

        logger.info("Hello client end")
      end
      
      def callback
  
        logger.info("Hello callback start")
        body      = request.body.read
        signature = request.env['HTTP_X_LINE_SIGNATURE']

        logger.info("Hello signature 1")
        
        unless client.validate_signature(body, signature)
  
          logger.info("Hello signature 2")
          
          error 400 do
            'Bad Request'
          end
        end
        
        # event      = params["events"][0]
        # event_type = event["type"]

        logger.info("Hello signature pass")
        
        #送られたテキストメッセージをinput_textに取得
        input_text = event["message"]["text"]
        # input_text = event.message['text']
        
        
        # ここでDB接続して会話内容をDBに更新
        
        events = client.parse_events_from(body)
        # events = client.parse_events_from(body)
        
        logger.info("Hello")
        
        events.each { |event|
          case event
            when Line::Bot::Event::Message
              case event.type
                #テキストメッセージが送られた場合、そのままおうむ返しする
                when Line::Bot::Event::MessageType::Text
                  message = {
                    type: 'text',
                    text: input_text
                  }
              end
              client.reply_message(event['replyToken'], message)
          end
        }
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