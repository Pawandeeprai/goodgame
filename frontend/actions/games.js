var AppDispatcher = require('../dispatcher/dispatcher');

var GamesActions = {
  receiveAllGames: function(shelf){
    AppDispatcher.dispatch({
      actionType: "ALL_GAMES",
      shelf: shelf
    });
  }
};

module.exports = GamesActions;
