# Phase 5: Reviews

## Rails
### Models
* Review

### Controllers
* Api::ReviewsController (create, destroy, show)

### Views
* Reviews/show.json.jbuilder

## Flux
### Views (React Components)
* Update Game view
  - add reviews to games
  - add aggregate user reviews to games

### Stores
* reviews

### Actions
* ApiActions.receiveAllReviews -> triggered by ApiUtil
* ApiActions.receiveSingleReview
* ApiActions.deleteReview
* ReviewActions.fetchAllReviews -> triggers ApiUtil
* ReviewActions.fetchSingleReview
* ReviewActions.createReview
* ReviewActions.updateReview
* ReviewActions.destroyReview

### ApiUtil
* ApiUtil.fetchAllReviews
* ApiUtil.fetchSingleReview
* ApiUtil.createReview
* ApiUtil.updateReview
* ApiUtil.destroyReview

## Gems/Libraries
