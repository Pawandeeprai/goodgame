var ReviewsActions = require('../actions/reviews');

var ReviewsUtil = {
  fetchGameReviews: function(data){
    $.ajax({
      url: "api/games/" + data + "/reviews",
      type: "GET",
      success: function(reviews){
        debugger;
        ReviewsActions.receiveAllReviews(reviews);
      }
    });
  }
};

module.exports = ReviewsUtil;
window.ReviewsUtil = ReviewsUtil;
