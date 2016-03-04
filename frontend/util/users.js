var SessionsActions =  require('../actions/sessions');

var UsersUtil = {
  createUser: function(data){
    $.ajax({
      url: "api/users",
      type: "POST",
      data: { user: data },
      success: function (user) {
        SessionsActions.receiveCurrentUser(user);
      }
    });
  },
  fetchUsers: function(){
    $.ajax({
      url: "api/users",
      type: "GET",
      success: function (users) {
        
      }
    });
  },
  editUser: function(data){
    $.ajax({
      url: "api/users/1",
      type: "PATCH",
      data: {user: data},
      success: function(user){
        SessionsActions.receiveCurrentUser(user);
      }
    });
  }
};

module.exports = UsersUtil;
