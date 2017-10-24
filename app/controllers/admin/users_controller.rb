class Admin::UsersController < ApplicationController
  # before_action :set_admin_user, only: [:show, :edit, :update, :destroy]


  def login
    usr = User.authenticate(params[:email], params[:pass])

    if usr
      reset_session
      session[:usr] = usr.id
      redirect_to params[:referer]

    else
      flash.now[:referer] = params[:referer]
      @error = 'ユーザ名/パスワードが誤っています。'
      # render 'index'
      # render :text => "hello world"
      render "login"
    end



  end


  # GET /admin/users
  # GET /admin/users.json
  def index
    # @admin_users = Admin::User.all

    render :index
  end

  # GET /admin/users/1
  # GET /admin/users/1.json
  def show


    render :index
  end

  # GET /admin/users/new
  def new
    @admin_user = Admin::User.new
  end

  # GET /admin/users/1/edit
  def edit
  end

  # POST /admin/users
  # POST /admin/users.json
  def create
    @admin_user = Admin::User.new(admin_user_params)

    respond_to do |format|
      if @admin_user.save
        format.html { redirect_to @admin_user, notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @admin_user }
      else
        format.html { render :new }
        format.json { render json: @admin_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /admin/users/1
  # PATCH/PUT /admin/users/1.json
  def update
    respond_to do |format|
      if @admin_user.update(admin_user_params)
        format.html { redirect_to @admin_user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @admin_user }
      else
        format.html { render :edit }
        format.json { render json: @admin_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /admin/users/1
  # DELETE /admin/users/1.json
  def destroy
    @admin_user.destroy
    respond_to do |format|
      format.html { redirect_to admin_users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
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
      redirect_to contoller: :login, action: :index
    end

  end

end
