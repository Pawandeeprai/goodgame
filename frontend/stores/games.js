var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var GamesStore = new Store(AppDispatcher);

var _games = [];
var updateGames = function(games){
  _games = games;
};

GamesStore.all = function(){
  return _games;
};

GamesStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "ALL_GAMES":
      updateGames(payload.games);
      GamesStore.__emitChange();
      break;

  }
};

module.exports = GamesStore;
