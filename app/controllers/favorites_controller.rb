class Api::FavoritesController < ApplicationController

  def index
    @games = current_user.favorite_games

    render "api/games/index"
  end
end
