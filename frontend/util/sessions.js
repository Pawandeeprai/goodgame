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
  }
};

module.exports = SessionsUtil;
