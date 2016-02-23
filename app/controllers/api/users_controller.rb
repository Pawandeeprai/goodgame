class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render 'api/users/show'
    else
      render json: {message: "invalid credentials"}, status: 401
    end
  end

  def show
    @user = User.find_by_id(params[:id])
    @current_user = current_user
  end

  def index
    @users = User.all
    render :index
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :name)
  end


end
