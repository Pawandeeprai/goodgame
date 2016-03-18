require 'securerandom'
class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    if user_params[:username] == "guest"
      @user = User.new(
      username: ("guest" + SecureRandom.base64),
      name: "Welcome Guest!",
      picture_url: "https://cdn3.iconfinder.com/data/icons/brain-games/1042/Board-Games-grey.png",
      password: "passwordpassword"
      )
      if @user.save
        10.times do |i|
          favorite = Favorite.new(user_id: @user.id, game_id: i)
          favorite.save
        end
        shelves = Shelf.generate_shelves(@user)
        5.times do |i|
          relation = GameShelf.new(shelf_id: shelves[0].id, game_id: i + 5)
          relation.save
        end
        5.times do |i|
          relation = GameShelf.new(shelf_id: shelves[1].id, game_id: i + 10)
          relation.save
        end
        sign_in(@user)
        render 'api/users/show'
      end
    else

      @user = User.new(user_params)

      if @user.save
        sign_in(@user)
        render 'api/users/show'
        Shelf.generate_shelves(@user)
      else
        render json: {message: "invalid credentials"}, status: 401
      end
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

  def update
    @user = current_user
    @user.update(user_params)

    if @user.save
      render 'api/users/show'
    else
      render json: {status: "there was an error"}, status: 401
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :name, :picture_url)
  end


end
