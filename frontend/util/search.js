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
  }
};

window.SearchUtil = SearchUtil;
module.exports = SearchUtil;
