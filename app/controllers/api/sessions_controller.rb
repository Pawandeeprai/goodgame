class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
    params[:username],
    params[:password]
    )

    if @user == nil
      render json: ["Wrong username/password combo!"], status: 401
    else
      sign_in(@user)
      render "api/users/show"
    end
  end

  def destroy
    sign_out!
    render json: {}
  end
end
