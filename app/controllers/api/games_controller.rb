# == Schema Information
#
# Table name: games
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  console      :string           not null
#  description  :text             not null
#  coverimg_url :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Api::GamesController < ApplicationController

  def create
    @game = Game.new(game_params)
    if @game.save
      if params[:shelf_id]
        @relation = GameShelf.new(game_id: @game.id, shelf_id: params[:shelf_id].to_i)
        if @relation.save
          render json: {message: "success"}
        end
      else
        render json:{game: @game}
      end
    else
      render json: {status: "missing some information"}
    end
  end

  def show
    @game = Game.find_by_id(params[:id])
    rating = @game.rating
    shelves = @game.shelves

    render 'api/games/show'
  end

  def index
    @games = Game.all
    render 'api/games/index'
  end

  private
  def game_params
    params.require(:game).permit(
    :title, :description, :image, :bgg_id, :minplayers, :maxplayers, :yearpublished, :playtime
    )
  end
end
