require 'bgg-api'

class Api::SearchesController < ApplicationController
  def index
    bgg = BggApi.new
    search_results = bgg.search({:query => search_params.query_string, :type => 'boardgame' })
    render search_results
  end

  private
  def search_params
    params.require(:search).permit(:query_string, :bgg_id)
  end
end
