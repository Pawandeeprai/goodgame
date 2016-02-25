var ShelvesActions = require('../actions/shelves');
var GamesActions = require('../actions/games');

var ShelvesUtil = {
  fetchShelves: function(){
    $.ajax({
      url: "api/users/1/shelves",
      type: "GET",
      success: function (shelves) {
        ShelvesActions.receiveAllShelves(shelves);
      }
    });
  },
  fetchShelfGames: function(data){
    $.ajax({
      url: "/api/game_shelves",
      type: "GET",
      data: {shelf: data},
      success: function(games){
        GamesActions.receiveAllGames(games);
      }
    });
  }
};

module.exports = ShelvesUtil;
window.ShelvesUtil = ShelvesUtil;
