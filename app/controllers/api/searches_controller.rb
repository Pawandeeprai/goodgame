require 'bgg-api'
require 'byebug'

class Api::SearchesController < ApplicationController
  def index
    bgg = BggApi.new
    search_results = bgg.search({:query => params[:search][:query_string], :type => 'boardgame' })
    render json: search_results
  end

  def show
    @game = Game.find_by_bgg_id(params[:id])
    if @game
      render json: @game
    else
      bgg = BggApi.new
      results = bgg.thing({id: params[:id]})
      # debugger
      image_url = "http:" + results["item"][0]["image"][0]
      game = {
        title: results["item"][0]["name"][0]["value"],
        description: CGI.unescapeHTML(results["item"][0]["description"][0]),
        image: image_url,
        bgg_id: results["item"][0]["id"],
        minplayers: results["item"][0]["minplayers"][0]["value"],
        maxplayers: results["item"][0]["maxplayers"][0]["value"],
        yearpublished: results["item"][0]["yearpublished"][0]["value"],
        playtime: results["item"][0]["playingtime"][0]["value"]
      }
      render json: game
    end
  end

  private
  def search_params
    params.require(:search).permit(:query_string, :bgg_id)
  end
end
