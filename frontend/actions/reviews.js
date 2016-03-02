var AppDispatcher = require('../dispatcher/dispatcher');


var ReviewsActions ={
  receiveAllReviews: function(reviews){
    AppDispatcher.dispatch({
      actionType: "ALL_REVIEWS",
      reviews: reviews
    });
  }
};

module.exports = ReviewsActions;
