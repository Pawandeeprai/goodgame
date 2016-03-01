var AppDispatcher = require('../dispatcher/dispatcher');

var GamesActions = {
  receiveAllGames: function(shelf){
    AppDispatcher.dispatch({
      actionType: "ALL_GAMES",
      shelf: shelf
    });
  },

  receiveOneGame: function(game){
    AppDispatcher.dispatch({
      actionType: "ONE_GAME",
      game: game
    });
  },

  removeGame: function(game){
    AppDispatcher.dispatch({
      actionType: "REMOVE_GAME",
      game_id: game.game_id
    });
  },
  favoriteGames: function(games){
    debugger;
    AppDispatcher.dispatch({
      actionType: "FAVORITE_GAMES",
      games: games
    });
  }

};

module.exports = GamesActions;
