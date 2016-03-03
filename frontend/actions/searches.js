var AppDispatcher = require('../dispatcher/dispatcher');

var SearchesActions = {
  receiveSearchResults: function(searchResults){
    AppDispatcher.dispatch({

      actionType: "SEARCH_RESULTS",
      searchResults: searchResults
    });
  },


};

module.exports = SearchesActions;
