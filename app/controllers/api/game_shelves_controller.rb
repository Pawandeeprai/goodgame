
class Api::GameShelvesController < ApplicationController
  def index
    @shelf = Shelf.find_by_id(params[:shelf_id])
    @games = @shelf.games
    @relation = false
    @games.each do |game|
      description = game.description.split("&mdash;")
      game.description = description.join
      if game.id == params[:game_id].to_i
        @relation = true
      end
    end
    render json: {status: @relation}
  end

  def show
    @shelf = Shelf.find_by_id(params[:id])
    if @shelf
      render :show
    else
      render json: {status: "couldn't find that shelf"}, status: 401
    end
  end

  def create
    @relation = GameShelf.new(shelf_params)

    if @relation.save
      render json:{status: "success"}
    else
      render json: {status: "something went wrong"}, status: 401
    end

  end

  def destroy
    @relation = GameShelf.find_by(shelf_params)

    if @relation.destroy
      @shelf = Shelf.find_by_id(shelf_params[:shelf_id])
      render :show
    else
      render json: {status: "something went wrong"}, status: 401
    end

  end

  private
  def shelf_params
    params.require(:shelf_game).permit(:shelf_id, :game_id)
  end
end
