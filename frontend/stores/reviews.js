var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var ReviewsStore = new Store(AppDispatcher);

var _reviews = [];

var updateReviews = function(reviews){
  _reviews = reviews;
};

ReviewsStore.all = function(){
  return _reviews;
};

ReviewsStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "ALL_REVIEWS":
      updateReviews(payload.reviews);
      ReviewsStore.__emitChange();
      break;

  }
};
module.exports = ReviewsStore;
