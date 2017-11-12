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
        
        # ここでDB接続して会話内容をDBに更新
        events = client.parse_events_from(body)
        
        
        logger.info("events: #{events}")
        
        
        events.each { |event|
          
          line_user_id = event['source'].fetch('type', nil) == "user" ? event['source']['userId'] : nil
          
          if line_user_id.present?
            
            case event
              when Line::Bot::Event::Message
                case event.type
                  #テキストメッセージが送られた場合、そのままおうむ返しする
                  when Line::Bot::Event::MessageType::Text
                    
                    if User.find_by(lineId: line_user_id).nil?
                      #   LineアカウントとUser登録情報の紐付け
                      reply_message = ApiUtilities::check_content("ご利用いただきありがとうございます。\n電話番号を入力してくだいさい。")
                    
                    else
                      
                      reply_message = ApiUtilities::list_button
                      
                      # reply_message = ApiUtilities::check_content(event.message['text'])
                      # reply_message = ApiUtilities::confirm_button
                      # reply_message = ApiUtilities::text_carousel
                      # reply_message = ApiUtilities::imaga_carousel
                    
                    end
                  
                  else
                    reply_message = ApiUtilities::check_content("現在未対応です。")
                
                end
                client.reply_message(event['replyToken'], reply_message)
            end
          
          
          end
        }
        
        head :ok
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