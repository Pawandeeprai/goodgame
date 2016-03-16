var AppDispatcher = require('../dispatcher/dispatcher');

var MessageActions = {
  receiveNewMessage: function(message){
    AppDispatcher.dispatch({

      actionType: "NEW_MESSAGE",
      message: message.responseText
    });
  }
};

module.exports = MessageActions;
