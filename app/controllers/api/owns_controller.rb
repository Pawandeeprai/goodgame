class Api::OwnsController < ApplicationController

  def index
    @games = current_user.owned_games

    render "api/games/index"
  end

  def create
    @relation = Own.new(user_id: current_user.id, game_id: params[:game_id])

    if @relation.save
      @game = Game.find_by_id(@relation.game_id)
      render 'api/games/show'
    else
      render json: {status: "something went wrong"}, status: 401
    end
  end

  def destroy
    @relation = Own.find_by(game_id: params[:game_id], user_id: current_user.id)

    if @relation
      @relation.destroy
      render json: {game_id: params[:game_id]}
    else
      render json: {status: "something went wrong"}, status: 401
    end

  end
end
