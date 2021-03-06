var ShelvesActions = require('../actions/shelves');
var GamesActions = require('../actions/games');
var ShelfActions = require('../actions/shelf');

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
      url: "/api/game_shelves/"+ data ,
      type: "GET",
      success: function(games){
        GamesActions.receiveAllGames(games);
      }
    });
  },
  createShelf: function(data) {
    $.ajax({
      url: "api/users/1/shelves",
      type: "POST",
      data: {shelf: data},
      success: function(shelf){
        ShelvesActions.receiveOneShelf(shelf);
      }
    });
  },
  deleteShelf: function(data) {
    $.ajax({
      url: "api/users/1/shelves/" + data,
      type: "DELETE",
      success: function(shelves){
        ShelvesActions.receiveAllShelves(shelves);
      }
    });
  },
  editShelf: function(data){
    $.ajax({
      url: "api/users/1/shelves/" + data.shelf_id,
      type: "PATCH",
      data: {shelf: data.shelf},
      success: function(shelf){
        ShelvesActions.editShelf(shelf);
      }
    });
  }

};

module.exports = ShelvesUtil;
window.ShelvesUtil = ShelvesUtil;
