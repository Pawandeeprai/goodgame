class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
    sessions_params[:username],
    sessions_params[:password]
    )
    if @user == nil
      render json: "Wrong username/password combo", status: 401
    else
      sign_in(@user)
      render "api/users/show"
    end
  end

  def index

    if current_user
      @current_user = current_user
      render 'api/users/show'
    else
      render json: "not logged in" , status: 401
    end
  end

  def destroy
    if current_user.username[0..4] == "guest"
      @current_user = current_user
      @current_user.destroy
      render json: {}
    else
      sign_out!
      render json: {}
    end
  end

  def sessions_params
    params.require(:user).permit(:username, :password)
  end
end
