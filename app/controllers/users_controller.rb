class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  # protect_from_forgery with: :exception

  # GET /users
  # GET /users.json
  def index
    @users     = User.all
    @user_list = @users.as_json


    # render :show, layout: 'top' and return

    respond_to do |format|
      format.html { render :index }
      format.json { render :index, status: :ok }
    end

  end

  # GET /users/1
  # GET /users/1.json
  def show

    # if User.exists?(id: params[:id])
    #   @users = User.find(params[:id])
    # end
    @users = @user


    render :show and return
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit

    respond_to do |format|
      format.html { render :edit }
      format.json { render :edit, status: :ok }
    end

  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save

        # noticeが指定されていることでViewの@noticeがレスポンされる
        format.html { redirect_to @user, notice: 'User was successfully created.' }


        # status -> Httpのstatus Codeを示す
        # location Locationヘッダ、新規に生成されたリソースの位置を通知
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        # if @user.update(params[:user])
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }

      # HTTPステータスのみを通知しコンテンツ本体は出力しない 204 No Content
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_user


    if User.exists?(id: params[:id])
      @user = User.find(params[:id])
    else
      @user = nil
    end

  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def user_params
    # params.fetch(:user, {})

    # TODO Modified as using rails strong parameter
    # params.require(:user).permit(:id)
    # 適切なパラメータを設定しないとエラーが出力される
    # ActiveModel::ForbiddenAttributesError - ActiveModel::ForbiddenAttributesError:
    params.require(:user).permit(
      :phoneNumber,
      :email,
      :firstName,
      :lastName,
      :pass,
      :role
    )

    # 少しゆるい書き方
    # params.fetch(:user, {}).permit(:email, :pass, :role)

    # こんな書き方もできる、開発中など
    # params.require(:user).permit!
  end
end
