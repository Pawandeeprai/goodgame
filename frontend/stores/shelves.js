var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var ShelvesStore = new Store(AppDispatcher);

var _shelves = [];

var updateShelves = function(shelves){
  _shelves = shelves;
};

var addShelf = function(shelf){
  _shelves.push(shelf);
};

var editShelf = function(shelf){
  _shelves.forEach(function(shelfEl){
    if (shelfEl.id === shelf.id){
      shelfEl.title = shelf.title;
    }
  });
};

ShelvesStore.all = function(){
  return _shelves;
};

ShelvesStore.findShelfName = function(shelfId){
  var shelfName = "";
  _shelves.forEach(function(shelf){
    if (shelf.id === parseInt(shelfId)){
      shelfName = shelf.title;
    }
  });

  return shelfName;
};

ShelvesStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "ALL_SHELVES":
      updateShelves(payload.shelves);
      ShelvesStore.__emitChange();
      break;
    case "ADD_SHELF":
      addShelf(payload.shelf);
      ShelvesStore.__emitChange();
      break;
    case "EDIT_SHELF":
      editShelf(payload.shelf);
      ShelvesStore.__emitChange();
      break;
  }
};

module.exports = ShelvesStore;
