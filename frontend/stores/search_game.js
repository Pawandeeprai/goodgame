var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var SearchGameStore = new Store(AppDispatcher);

var _searchGame = {};

var newGame = function(game){
  _searchGame = game;
};

SearchGameStore.all = function(){
  if (_searchGame !== {}){
    return _searchGame;
  }
};

SearchGameStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "SEARCH_GAME":
      newGame(payload.game);
      SearchGameStore.__emitChange();
      break;

  }
};
module.exports = SearchGameStore;
