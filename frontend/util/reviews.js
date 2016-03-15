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
  createReviewUsingBggId: function(bggId, data){
    $.ajax({
      url: "api/games/1/reviews",
      type: "POST",
      data: {review: data, bgg_id: bggId}
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
  },
  deleteReview: function(reviewId){
    $.ajax({
      url: "api/games/1/reviews/" + reviewId,
      type: "DELETE",
      success: function(review){
        ReviewsActions.removeReview(review);
      }
    });
  },
  editReview: function(gameId, review){
    $.ajax({
      url: "api/games/" + gameId + "/reviews/"+ review.id,
      type: "PATCH",
      data: {review: review},
      success: function(newReview){
        ReviewsActions.updateReview(newReview);
      }
    });
  }
};

module.exports = ReviewsUtil;
window.ReviewsUtil = ReviewsUtil;
