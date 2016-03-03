var React = require('react');
var UserReviewsStore = require('../../stores/user_reviews');
var AddReview = require('./add_review');
var ReviewsUtil = require('../../util/reviews');
var Rating = require('react-rating');



module.exports = React.createClass({
  getInitialState: function(){
    return {review: false};
  },

  componentDidMount: function(){
    this.Listener = UserReviewsStore.addListener(this._onChange);
    ReviewsUtil.fetchUserReivews(this.props.game.id);
  },

  _onChange: function(){
    this.setState({
      review: this.getStateFromStore()
    });
  },

  getStateFromStore: function(){
    return UserReviewsStore.findReview(this.props.game.id);
  },
  componentWillUnmount: function(){
    this.Listener.remove();
  },
  removeReview: function(e){
    e.preventDefault();
    ReviewsUtil.deleteReview(this.state.review.id);
  },

  render: function () {
    var display;
      var that = this;
    if (this.state.review){
      display = (
        <ul key={this.state.review.id}>
          <li>
            <Rating full="glyphicon glyphicon-star large"
                    empty="glyphicon glyphicon-star-empty large"
                    initialRate={this.state.review.rating}/>
          </li>
          <li>
            {this.state.review.review_text}
          </li>
          <div>
            <img src="assets/delete-2-xxl.png"
              className="icon"
              onClick={that.removeReview}/>
            <img src="assets/edit-xxl.png"
              className="icon"
              onClick={that.editReview}/>
          </div>
        </ul>
      );
    } else {
      display = <AddReview game={this.props.game} />;
    }
    return (
      <div className="reviews">
        <h3>
          Your Review for {this.props.game.title}
        </h3>
        {display}
      </div>
    );
  }
});
