var AppDispatcher = require('../dispatcher/dispatcher');

var SearchesActions = {
  receiveSearchResults: function(searchResults){
    AppDispatcher.dispatch({

      actionType: "SEARCH_RESULTS",
      searchResults: searchResults
    });
  },
  receiveGameResults: function(game){
    AppDispatcher.dispatch({
      actionType: "SEARCH_GAME",
      game: game
    });
  }

};

module.exports = SearchesActions;
