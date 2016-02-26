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

GamesStore.game = function(id){
  console.log(_games);
  var theGame;
  _games.forEach(function(game){
    if (game.id === id){
      theGame = game;
    }
  });
  return theGame;
};

GamesStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "ALL_GAMES":
      updateGames(payload.shelf.games);
      GamesStore.__emitChange();
      break;

  }
};

module.exports = GamesStore;
