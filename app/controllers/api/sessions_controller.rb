class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
    sessions_params[:username],
    sessions_params[:password]
    )
    if @user == nil
      render json: ["Wrong username/password combo"], status: 401
    else
      sign_in(@user)
      render "api/users/show"
    end
  end

  def index
    @current_user = current_user
    render 'api/users/show'
  end

  def destroy
    sign_out!
    render json: {}
  end

  def sessions_params
    params.require(:user).permit(:username, :password)
  end
end
