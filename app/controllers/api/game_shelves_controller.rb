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

  private
  def shelf_params
    params.require(:shelf).permit(:id)
  end
end
