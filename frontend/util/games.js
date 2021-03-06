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
      }
    });
  },
  removeGameFromShelf: function(data){
    $.ajax({
      url: "/api/game_shelves/1",
      type: "DELETE",
      data: {shelf_game: data},

      success: function(games){
        GamesActions.receiveAllGames(games);
      }
    });
  },
  removeGameFromShelfSoftly: function(data){
    $.ajax({
      url: "/api/game_shelves/1",
      type: "DELETE",
      data: {shelf_game: data},

      success: function(games){

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
        GamesActions.ownedGames(games);
      }
    });
  },
  removeFavorite: function(data){
    $.ajax({
      url: "api/favorites/1",
      type: "DELETE",
      data: {game_id: data},
      success: function(game) {
        GamesActions.removeFavorite(game);
      }
    });
  },
  removeOwned: function(data){
    $.ajax({
      url: "api/owns/1",
      type: "DELETE",
      data: {game_id: data},
      success: function(game) {
        GamesActions.removeOwned(game);
      }
    });
  },
  createFavorite: function(data){
    $.ajax({
      url: "api/favorites",
      type: "POST",
      data: {game_id: data},
      success: function(game){
        GamesActions.createFavorite(game);
      }
    });
  },
  createOwned: function(data){
    $.ajax({
      url: "api/owns",
      type: "POST",
      data: {game_id: data},
      success: function(game){
        GamesActions.createOwned(game);
      }
    });
  },
  createGame: function(game, shelfId){
    $.ajax({
      url: "api/games",
      type: "POST",
      data: {game: game, shelf_id: shelfId},
      success: function(newGame){
        GamesActions.receiveOneGame(newGame);
      }
    });
  }
};

module.exports = GamesUtil;
window.GamesUtil = GamesUtil;
