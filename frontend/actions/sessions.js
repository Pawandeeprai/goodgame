var AppDispatcher = require('../dispatcher/dispatcher');

var SessionsActions = {
  receiveCurrentUser: function(user){
    AppDispatcher.dispatch({

      actionType: "CURRENT_USER",
      user: user
    });
  },

  logoutCurrentUser: function(){
    AppDispatcher.dispatch({
      actionType: "LOGOUT_USER"
    });
  }
};

module.exports = SessionsActions;
