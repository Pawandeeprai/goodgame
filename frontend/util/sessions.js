var SessionsActions = require('../actions/sessions');

var SessionsUtil = {
  createSession: function(data){
    $.ajax({
      url: "api/sessions",
      type: "POST",
      data: { user: data },
      success: function (user) {
        SessionsActions.receiveCurrentUser(user);
      }
    });
  },

  fetchCurrentUser: function(){
    $.ajax({
      url: "api/sessions",
      type: "GET",
      success: function (user) {
        SessionsActions.receiveCurrentUser(user);
      },
      error: function(responce){
        // debugger;
      }
    });
  },

  logoutCurrentUser: function(id){
    $.ajax({
      url: "api/sessions" + "/" + id,
      type: "DELETE",
      success: function(){
        SessionsActions.logoutCurrentUser();
      }
    });
  }
};

module.exports = SessionsUtil;
