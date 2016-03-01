class Api::OwnsController < ApplicationController

  def index
    @games = current_user.owned_games

    render "api/games/index"
  end
end
