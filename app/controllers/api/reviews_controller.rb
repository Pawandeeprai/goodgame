# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  rating      :integer          not null
#  review_text :text
#  user_id     :integer          not null
#  game_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Api::ReviewsController < ApplicationController

  def index
    @game = Game.find_by_id(params[:game_id])

    @reviews = @game.reviews
    render "api/reviews/index"
  end
end
