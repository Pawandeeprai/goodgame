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

  def update
    @shelf = Shelf.find_by_id(params[:id])
    @shelf.title = shelf_params[:title]
    if @shelf.save
      render json: @shelf
    else
      render json: {status: "something went wrong"}, status: 401
    end

  end

  def destroy
    @shelf = Shelf.find_by_id(params[:id])

    if @shelf != nil
      @shelf.destroy
      @shelves = Shelf.where(user_id: current_user.id)
      render "api/shelves/index"
    else
      render json: {status: "shelf doesn't exist"}, status: 401
    end
  end

  private
  def shelf_params
    params.require(:shelf).permit(:title, :id)
  end

end
