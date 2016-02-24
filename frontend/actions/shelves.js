var AppDispatcher = require('../dispatcher/dispatcher');

var ShelvesActions = {
  receiveAllShelves: function(shelves){
    AppDispatcher.dispatch({
      actionType: "ALL_SHELVES",
      shelves: shelves
    });
  }
};

module.exports = ShelvesActions;
