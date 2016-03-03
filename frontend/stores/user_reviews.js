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

var removeReview = function(userReview){
  _reviews.forEach(function(review, idx){
    if (review.id === parseInt(userReview.id)){
      _reviews.splice(idx);
    }
  });
};

var updateReview = function(newReview){
  _reviews.forEach(function(review, idx){
    if (review.id === parseInt(newReview.id)){
      _reviews.splice(idx);
    }
  });
  _reviews.push(newReview);
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
    case "REMOVE_REVIEW":
      removeReview(payload.review);
      UserReviewsStore.__emitChange();
      break;
    case "UPDATE_REVIEW":
      updateReview(payload.review);
      UserReviewsStore.__emitChange();
      break;
  }
};
module.exports = UserReviewsStore;
