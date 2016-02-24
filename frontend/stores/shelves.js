var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var ShelvesStore = new Store(AppDispatcher);

var _shelves = [];

var updateShelves = function(shelves){
  _shelves = shelves;
};

ShelvesStore.all = function(){
  return _shelves;
};

ShelvesStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "ALL_SHELVES":
      updateShelves(payload.shelves);
      ShelvesStore.__emitChange();
      break;

  }
};

module.exports = ShelvesStore;
