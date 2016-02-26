class Api::ShelvesController < ApplicationController

  def index
    @shelves = Shelf.where(user_id: current_user.id)
    render "api/shelves/index"
  end

  def create
    @shelf = Shelf.new(shelf_params)
    @shelf.user_id = current_user.id

    if @shelf.save
      render "api/shelves/show"
    else
      render json: {status: "something went wrong"}, status: 401
    end
  end

  private
  def shelf_params
    params.require(:shelf).permit(:title)
  end

end
