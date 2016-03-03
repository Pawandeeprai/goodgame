var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var SearchStore = new Store(AppDispatcher);

var _searchItems = {};

var newSearch = function(searchResults){
  _searchItems = searchResults;
};

SearchStore.all = function(){
  return _searchItems;
};

SearchStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "SEARCH_RESULTS":
      newSearch(payload.searchResults);
      SearchStore.__emitChange();
      break;

  }
};
module.exports = SearchStore;
