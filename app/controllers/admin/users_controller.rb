class Admin::UsersController < ApplicationController
  # before_action :set_admin_user, only: [:show, :edit, :update, :destroy]
  # before_action :set_admin_user, only: [:show, :edit, :update, :destroy]
  before_action :check_logined, only: [:login, :index, :show]
  # skip_before_action
  # after_action {only, except}
  
  
  def login
    # usr = User.authenticate(params[:email], params[:pass])
    #
    # logger.debug("login Controll\n" + usr)
    #
    # LoggerUtilities::logger_login
    # logger.inf(usr)
    #
    # if usr
    #   reset_session
    #   session[:usr] = usr.id
    #   redirect_to params[:referer]
    #
    # else
    #   flash.now[:referer] = params[:referer]
    #   @error              = 'ユーザ名/パスワードが誤っています。'
    #   # render 'index'
    #   # render :text => "hello world"
    #   render "login"
    # end
    
    render "login"
  end
  
  def authenticate
    usr = User.authenticate(params[:email], params[:pass])
    
    logger.debug("usr")
    logger.debug(usr)
    
    if usr
      reset_session
      session[:user] = usr.id
      redirect_to params[:referer]
    else
      flash.now[:referer] = params[:referer]
      @error              = 'ユーザ名/パスワードが誤っています。'
      # render 'index'
      # render :text => "hello world"
      render "login"
    end
  
  end
  
  def logout
    reset_session
    redirect_to '/'
  end
  
  def index
  
  
  end
  
  def show
    @users            = User.where(withdrawalDate: nil)
    @withdrawal_users = User.where.not(withdrawalDate: nil)
    
    respond_to do |format|
      format.html { render :index }
      format.json { render :index, status: :ok }
    end
  end
  
  def new
  
  end
  
  def edit
  end
  
  def create
  
  end
  
  def update
  
  end
  
  def destroy
  
  end
  
  private
  # Use callbacks to share common setup or constraints between actions.
  def set_admin_user
    @admin_user = Admin::User.find(params[:id])
  end
  
  # Never trust parameters from the scary internet, only allow the white list through.
  def admin_user_params
    params.fetch(:admin_user, {})
  end
  
  def check_logined
    if session[:user] then
      begin
        @admin_user = User.find(session[:user])
      rescue ActiveRecord::RecordNotFound
        reset_session
      end
    end
    
    # ユーザ情報が取得できなかった場合は、ログインページにリダイレクト
    unless @admin_user
      # request.fullpathを渡してるのはログイン完了後にページをリダイレクトするため
      flash[:referer] = request.fullpath
      # redirect_to contoller: :users, action: :login
      # redirect_to action: :login and return
      render action: 'login' and return
    end
  
  end

end
