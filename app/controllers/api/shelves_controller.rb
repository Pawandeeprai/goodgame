class Api::ShelvesController < ApplicationController

  def index
    @shelves = Shelf.where(user_id: current_user.id)
    render "api/shelves/index"
  end

end
