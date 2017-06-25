module Api
  module V1
    class LineController < ApplicationController
      # protect_from_forgery with: :exception
      # protect_from_forgery with: :null_session
      skip_before_filter :verify_authenticity_token


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
