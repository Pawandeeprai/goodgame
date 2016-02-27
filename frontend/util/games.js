var GamesActions = require('../actions/games');

var GamesUtil = {
  fetchGames: function(){
    $.ajax({
      url: "api/games",
      type: "GET",
      success: function (games) {
        GamesActions.receiveAllGames(games);
      }
    });
  },

  fetchGame: function(data){
    $.ajax({
      url: "api/games/" + data,
      type: "GET",
      success: function(game){
        GamesActions.receiveOneGame(game);
      }
    });
  },
  addGameToShelf: function(data){
    debugger;
    $.ajax({
      url: "/api/game_shelves",
      type: "POST",
      data: {shelf_game: data},
      success: function(game){
        console.log(game);
      }
    });
  }
};

module.exports = GamesUtil;
window.GamesUtil = GamesUtil;
