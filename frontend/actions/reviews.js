var AppDispatcher = require('../dispatcher/dispatcher');


var ReviewsActions ={
  receiveAllReviews: function(reviews){
    AppDispatcher.dispatch({
      actionType: "ALL_REVIEWS",
      reviews: reviews
    });
  },
  receiveAllUserReviews: function(reviews){
    AppDispatcher.dispatch({
      actionType: "USER_REVIEWS",
      reviews: reviews
    });
  },
  newUserReview: function(review){
    AppDispatcher.dispatch({
      actionType: "NEW_USER_REVIEW",
      review: review
    });
  },
  removeReview: function(review){
    AppDispatcher.dispatch({
      actionType: "REMOVE_REVIEW",
      review: review
    });
  }
};

module.exports = ReviewsActions;
