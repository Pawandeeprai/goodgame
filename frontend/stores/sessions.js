var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SessionsStore = new Store(AppDispatcher);

var _currentUser = {};

var updateCurrentUser = function(user){
  _currentUser = user;
};

SessionsStore.all = function(){
  return _currentUser;
};

SessionsStore.__onDispatch = function(payload){
  debugger;
  switch(payload.actionType){
    case "CURRENT_USER":
      updateCurrentUser(payload.user);
      SessionsStore.emitChange();
      break;
  }
};

module.exports = SessionsStore;
