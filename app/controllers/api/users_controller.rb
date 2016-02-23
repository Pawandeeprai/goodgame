class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render 'api/users/show'
    else
      flash.now[:errors] = @user.errors.full_messages
      redirect_to '/'
    end
  end

  def show
    @user = User.find_by_id(params[:id])
    @current_user = current_user
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :name)
  end


end
