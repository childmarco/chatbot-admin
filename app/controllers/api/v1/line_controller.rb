module Api
  module V1
    class LineController < ApplicationController
      # protect_from_forgery with: :exception
      # protect_from_forgery with: :null_session
      skip_before_filter :verify_authenticity_token


      require 'line/bot'
      # require 'net/http'

      def index
        @user = User.all
        render json: @user
      end

      def show
        # @user = User.find(params[:id])
        # render json: @user

        # render json: UserResource.new(User.find(params[:id]))
        render json: User.find(params[:id])

      end

      def create
        # @user = User.new(
        #   email: params[:email],
        #   role:  params[:username],
        #   pass:  params[:pass],
        #   role:  params[:role]
        # )
        # render json: @user

        @user = User.new(user_params)
        if @user.save
          render json: @user
        else
          render json: @user.errors, status: :unprocessable_entity
        end

      end

      def client
        client = Line::Bot::Client.new { |config|
          # config.channel_secret = 'XXXXXXXXXXXXXXXXXXXXXXXXXX'
          # config.channel_token  = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
          config.channel_token  = ENV['LINE_CHANNEL_ID']
          config.channel_secret = ENV['LINE_CHANNEL_SECRET']

        }
      end


      def callback
        body       = request.body.read
        signature  = request.env['HTTP_X_LINE_SIGNATURE']
        event      = params["events"][0]
        event_type = event["type"]
p body
        #送られたテキストメッセージをinput_textに取得
        input_text = event["message"]["text"]

        events = client.parse_events_from(body)

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

                #画像が送られた場合、適当な画像を送り返す
                #画像を返すには、画像が保存されたURLを指定する。
                #なお、おうむ返しするには、１度AWSなど外部に保存する必要がある。ここでは割愛する
                # when Line::Bot::Event::MessageType::Image
                #   image_url = "https://XXXXXXXXXX/XXX.jpg" #httpsであること
                #   message   = {
                #     type:               "image",
                #     originalContentUrl: image_url,
                #     previewImageUrl:    image_url
                #   }
              end #event.type
              #メッセージを返す
              client.reply_message(event['replyToken'], message)
          end #event
        } #events.each
      end

      private
      # Use callbacks to share common setup or constraints between actions.
      def set_user
        @user = User.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def user_params
        params.require(:user).permit(:email, :username, :pass, :role)
      end
    end
  end
end
