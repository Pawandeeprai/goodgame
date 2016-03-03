var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var UserReviewsStore = new Store(AppDispatcher);

var _reviews = [];

var updateReviews = function(reviews){
  _reviews = reviews;
};

var addReview = function(review){
  _reviews.push(review);
};

UserReviewsStore.all = function(){
  return _reviews;
};

UserReviewsStore.findReview = function(gameId){
  var userReivew;
  _reviews.forEach(function(review){
    if (review.game_id === parseInt(gameId)){
      userReivew = review;
    }
  });
  return userReivew;
};

UserReviewsStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "USER_REVIEWS":
      updateReviews(payload.reviews);
      UserReviewsStore.__emitChange();
      break;
    case "NEW_USER_REVIEW":
      addReview(payload.review);
      UserReviewsStore.__emitChange();
      break;
  }
};
module.exports = UserReviewsStore;
