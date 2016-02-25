class Api::GameShelvesController < ApplicationController
  def index
    @shelf = Shelf.find_by(shelf_params)
    if @shelf
      @games = @shelf.games
      render 'api/games/index'
    else
      render json: {status: "couldn't find that shelf"}, status: 401
    end
  end

  private
  def shelf_params
    params.require(:shelf).permit(:id)
  end
end
