var GamesActions = require('../actions/games');

var GamesUtil = {
  fetchGames: function(){
    $.ajax({
      url: "api/games",
      type: "GET",
      success: function (games) {
        console.log(games);
      }
    });
  }
};

module.exports = GamesUtil;
window.GamesUtil = GamesUtil;
