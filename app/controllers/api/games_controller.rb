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
      render 'api/game/show'
    else
      render json: {status: "missing some information"}
    end
  end

  def show
    @game = Game.find_by_id(params[:id])
    render 'api/games/show'
  end

  def index
    @games = Game.all
    render 'api/games/index'
  end

  private
  def game_params
    params.require(:game).permit(:title, :console, :description, :coverimg_url)
  end
end