var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UsersStore = new Store(AppDispatcher);

var _users = [];

UsersStore.all = function(){
  return _users.slice();
};
