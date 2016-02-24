var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SessionsUtil = require('../util/sessions');

var SessionsStore = new Store(AppDispatcher);

var _currentUser = {};

var updateCurrentUser = function(user){
  _currentUser = user;

// var logoutCurrentUser = function(){
//   _currentUser = {};
// };

};

SessionsStore.all = function(){
  return _currentUser;
};

SessionsStore.isCurrentUser = function(){
  if (jQuery.isEmptyObject(_currentUser)){
    return false;
  } else {
    return true;
  }
};

SessionsStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case "CURRENT_USER":
      updateCurrentUser(payload.user);
      SessionsStore.__emitChange();
      break;
    case "LOGOUT_USER":
      _currentUser = {};
      SessionsStore.__emitChange();
      break;
  }
};

module.exports = SessionsStore;
