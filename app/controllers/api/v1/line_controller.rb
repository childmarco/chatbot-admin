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


    end
  end
end
