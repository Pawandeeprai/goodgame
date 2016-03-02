class Api::FavoritesController < ApplicationController

  def index
    @games = current_user.favorite_games

    render "api/games/index"
  end

  def destroy
    @favorite = Favorite.find_by(game_id: params[:game_id], user_id: current_user.id)

    if @favorite
      @favorite.destroy
      render json: {game_id: params[:game_id]}
    else
      render json: {status: "something went wrong"}, status: 401
    end

  end

  def create
    @favorite = Favorite.new(user_id: current_user.id, game_id: params[:game_id])

    if @favorite.save
      @game = Game.find_by_id(@favorite.game_id)
      render 'api/games/show'
    else
      render json: {status: "something went wrong"}, status: 401
    end
  end


end
