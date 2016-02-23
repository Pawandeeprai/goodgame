var AppDispatcher = require('../dispatcher/dispatcher');

var SessionsActions = {
  receiveCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: "CURRENT_USER",
      user: user
    });
  }
};

module.exports = SessionsActions;
