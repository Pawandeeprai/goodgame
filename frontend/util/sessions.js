var SessionsActions = require('../actions/sessions');
var MessagesActions = require('../actions/messages');

var SessionsUtil = {
  createSession: function(data){
    $.ajax({
      url: "api/sessions",
      type: "POST",
      data: { user: data },
      success: function (user) {
        SessionsActions.receiveCurrentUser(user);
      },
      error: function(message){
        MessagesActions.receiveNewMessage(message);
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
      error: function(response){
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
