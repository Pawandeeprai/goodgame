var GamesActions = require('../actions/games');

var GamesUtil = {
  fetchGames: function(){
    $.ajax({
      url: "api/games",
      type: "GET",
      success: function (games) {
        GamesActions.receiveAllGames(games);
      }
    });
  },

  fetchGame: function(data){
    $.ajax({
      url: "api/games/" + data,
      type: "GET",
      success: function(game){
        GamesActions.receiveOneGame(game);
      }
    });
  },
  addGameToShelf: function(data){
    $.ajax({
      url: "/api/game_shelves",
      type: "POST",
      data: {shelf_game: data},
      success: function(game){
        console.log(game);
      }
    });
  },
  removeGameFromShelf: function(data){
    $.ajax({
      url: "/api/game_shelves/1",
      type: "DELETE",
      data: {shelf_game: data},

      success: function(game){
        GamesActions.removeGame(game);
      }
    });
  },
  fetchFavoriteGames: function(){
    $.ajax({
      url: "/api/favorites",
      type: "GET",
      success: function(games){
        GamesActions.favoriteGames(games);
      }
    });
  },
  fetchOwnedGames: function(){
    $.ajax({
      url: "/api/owns",
      type: "GET",
      success: function(games){
        console.log(games);
      }
    });
  }
};

module.exports = GamesUtil;
window.GamesUtil = GamesUtil;
