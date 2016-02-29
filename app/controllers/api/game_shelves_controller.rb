
class Api::GameShelvesController < ApplicationController
  def index

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
      render json:{ game_id: @relation.game_id}
    else
      render json: {status: "something went wrong"}, status: 401
    end

  end

  private
  def shelf_params
    params.require(:shelf_game).permit(:shelf_id, :game_id)
  end
end
