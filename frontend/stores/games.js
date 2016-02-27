var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var GamesStore = new Store(AppDispatcher);

var _games = [];
var updateGames = function(games){
  _games = games;
};

var addGame = function(game){
  _games.push(game);
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
    case "ONE_GAME":
      addGame(payload.game);
      GamesStore.__emitChange();
      break;
  }
};

module.exports = GamesStore;
