var SearchUtil = {
  search: function(data){
    $.ajax({
      url: "api/searches/",
      type: "GET",
      data: data,
      success: function(results){
        console.log(results);
      }
    });
  }
};

window.SearchUtil = SearchUtil;
module.exports = SearchUtil;
