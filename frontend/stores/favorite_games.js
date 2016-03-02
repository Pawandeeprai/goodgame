var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var FavoriteGamesStore = new Store(AppDispatcher);

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

FavoriteGamesStore.all = function(){
  return _games;
};

FavoriteGamesStore.game = function(id){
  var theGame;
  _games.forEach(function(game){
    if (game.id === id){
      theGame = game;
    }
  });
  return theGame;
};

FavoriteGamesStore.isFavorite = function(gameId){
  var favorite = false;
  _games.forEach(
    function(game){
      if (game.id === gameId){
        favorite = true;
      }
    }
  );
  return favorite;
};


FavoriteGamesStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "FAVORITE_GAMES":
      updateGames(payload.games);
      FavoriteGamesStore.__emitChange();
      break;
    case "NEW_FAVORITE_GAME":
      addGame(payload.game);
      FavoriteGamesStore.__emitChange();
      break;
    case "REMOVE_FAVORITE_GAME":
      removeGame(payload.gameId);
      FavoriteGamesStore.__emitChange();
      break;
  }
};

module.exports = FavoriteGamesStore;
