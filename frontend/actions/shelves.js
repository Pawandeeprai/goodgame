var AppDispatcher = require('../dispatcher/dispatcher');

var ShelvesActions = {
  receiveAllShelves: function(shelves){
    AppDispatcher.dispatch({
      actionType: "ALL_SHELVES",
      shelves: shelves
    });
  },
  receiveOneShelf : function(shelf){
    AppDispatcher.dispatch({
      actionType: "ADD_SHELF",
      shelf: shelf
    });
  },
  editShelf : function(shelf){
    AppDispatcher.dispatch({
      actionType: "EDIT_SHELF",
      shelf: shelf
    });
  },
  relation : function(message){
    AppDispatcher.dispatch({
      actionType: "NEW_MESSAGE",
      message: message
    });
  }
};

module.exports = ShelvesActions;
