var AppDispatcher = require('../dispatcher/dispatcher');

var GamesActions = {
  receiveAllGames: function(games){
    AppDispatcher.dispatch({
      actionType: "ALL_GAMES",
      games: games
    });
  }
};

module.exports = GamesActions;
