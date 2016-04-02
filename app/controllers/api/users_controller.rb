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
      fav_seed = [1,32,16,53,31,34,15,41,46,64]
      played_seed = [1,54,16,15,41,53,64]
      want_to_play_seed = [52,51,49,47,34]
      if @user.save
        8.times do |i|
          favorite = Favorite.new(user_id: @user.id, game_id: fav_seed[i - 1])
          favorite.save
        end
        shelves = Shelf.generate_shelves(@user)
        6.times do |i|
          relation = GameShelf.new(shelf_id: shelves[0].id, game_id: played_seed[i - 1])
          relation.save
        end
        4.times do |i|
          relation = GameShelf.new(shelf_id: shelves[1].id, game_id: want_to_play_seed[i - 1])
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
