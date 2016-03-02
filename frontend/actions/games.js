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
    AppDispatcher.dispatch({
      actionType: "FAVORITE_GAMES",
      games: games
    });
  },

  removeFavorite: function(gameId){
    AppDispatcher.dispatch({
      actionType: "REMOVE_FAVORITE_GAME",
      gameId: gameId
    });
  },
  createFavorite: function(game){
    AppDispatcher.dispatch({
      actionType: "NEW_FAVORITE_GAME",
      game: game
    });
  },

  ownedGames: function(games){
    AppDispatcher.dispatch({
      actionType: "OWNED_GAMES",
      games: games
    });
  },
  removeOwned: function(gameId){
    AppDispatcher.dispatch({
      actionType: "REMOVE_OWNED_GAME",
      gameId: gameId
    });
  },
  createOwned: function(game){
    AppDispatcher.dispatch({
      actionType: "NEW_OWNED_GAME",
      game: game
    });
  }

};

module.exports = GamesActions;
