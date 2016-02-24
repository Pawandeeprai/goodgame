var ShelvesActions = require('../actions/shelves');

var ShelvesUtil = {
  fetchShelves: function(){
    $.ajax({
      url: "api/users/1/shelves",
      type: "GET",
      success: function (shelves) {
        ShelvesActions.receiveAllShelves(shelves);
      }
    });
  }
};

module.exports = ShelvesUtil;
window.ShelvesUtil = ShelvesUtil;
