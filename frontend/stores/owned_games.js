var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var OwnedGamesStore = new Store(AppDispatcher);

var _games = [];

var updateGames = function(games){
  _games = games;
};

var addGame = function(game){
  _games.push(game);
};

var removeGame = function (gameId){
  _games.forEach(function(game, idx){
    if (game.id === parseInt(gameId.game_id)){
      _games.splice(idx);
    }
  });
};

OwnedGamesStore.all = function(){
  return _games;
};

OwnedGamesStore.game = function(id){
  var theGame;
  _games.forEach(function(game){
    if (game.id === id){
      theGame = game;
    }
  });
  return theGame;
};

OwnedGamesStore.isOwned = function(gameId){
  var owned = false;
  _games.forEach(
    function(game){
      if (game.id === gameId){
        owned = true;
      }
    }
  );
  return owned;
};

OwnedGamesStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "OWNED_GAMES":
      updateGames(payload.games);
      OwnedGamesStore.__emitChange();
      break;
    case "NEW_OWNED_GAME":
      addGame(payload.game);
      OwnedGamesStore.__emitChange();
      break;
    case "REMOVE_OWNED_GAME":
      removeGame(payload.gameId);
      OwnedGamesStore.__emitChange();
      break;
  }
};

module.exports = OwnedGamesStore;
