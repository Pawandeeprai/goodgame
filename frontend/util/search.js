var SearchesActions = require('../actions/searches');

var SearchUtil = {
  search: function(data){
    $.ajax({
      url: "api/searches/",
      type: "GET",
      data: {search: data},
      success: function(results){
        SearchesActions.receiveSearchResults(results);
      }
    });
  },
  getGameInfo: function(data){
    $.ajax({
      url: "api/searches/" + data,
      type: "GET",
      success: function(game){
        // if game id then we go a different direction
        SearchesActions.receiveGameResults(game);
      }
    });
  }
};

window.SearchUtil = SearchUtil;
module.exports = SearchUtil;
