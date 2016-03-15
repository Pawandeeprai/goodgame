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

  def create
    @review = Review.new(review_params)

    if params[:bgg_id]
      @game = Game.find_by_bgg_id(params[:bgg_id])
      @review.game_id = @game.id
    else
      @review.game_id = params[:game_id]
    end
    @review.user_id = current_user.id
    if @review.save
      render json: @review
    else
      render json:{status: "something went wrong"}, status: 401
    end

  end

  def show
    @reviews = current_user.reviews
    render "api/reviews/show"
  end

  def destroy
    @review = Review.find_by_id(params[:id])
    if @review
      @review.destroy
      render json: @review
    else
      render json: {status: "something went wrong"}, status: 401
    end
  end

  def update
    @review = Review.find_by_id(params[:id])
    @review.update(review_params)

    if @review.save
      render json: @review
    else
      render json: {status: "something went wrong"}, status: 401
    end
  end

  private
  def review_params
    params.require(:review).permit(:review_text, :rating, :id)
  end
end
