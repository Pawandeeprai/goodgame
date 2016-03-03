var ReviewsActions = require('../actions/reviews');

var ReviewsUtil = {
  fetchGameReviews: function(data){
    $.ajax({
      url: "api/games/" + data + "/reviews",
      type: "GET",
      success: function(reviews){
        ReviewsActions.receiveAllReviews(reviews);
      }
    });
  },
  createReview: function(gameId, data){
    $.ajax({
      url: "api/games/" + gameId + "/reviews",
      type: "POST",
      data: {review: data},
      success: function(review){
        ReviewsActions.newUserReview(review);
      }
    });
  },
  fetchUserReivews: function(gameId){
    $.ajax({
      url: "api/games/" + gameId + "/reviews/1",
      type: "GET",
      success: function(reviews){
        ReviewsActions.receiveAllUserReviews(reviews);
      }
    });
  }
};

module.exports = ReviewsUtil;
window.ReviewsUtil = ReviewsUtil;
