var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var MessagesStore = new Store(AppDispatcher);

var _messages = [];



MessagesStore.all = function(){
  return _messages;
};

var updateMessages = function(message){
  _messages.push(message);
};


MessagesStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "NEW_MESSAGE":
      updateMessages(payload.message);
      MessagesStore.__emitChange();
      break;

  }
};

module.exports = MessagesStore;
