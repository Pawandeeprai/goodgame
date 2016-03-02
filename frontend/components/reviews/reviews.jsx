var React = require('react');
var ReviewsStore = require('../../stores/reviews');
var ReviewsUtil = require('../../util/reviews');

module.exports = React.createClass({
  getInitialState: function(){
    return {
    };
  },

  componentDidMount: function(){
    debugger;
    this.Listener = ReviewsStore.addListener(this._onChange);
    ReviewsUtil.fetchGameReviews(this.props.game.id);
    this.setState({
      reviews: ReviewsStore.all()
    });
  },

  componentWillUnmount: function(){
    this.Listener.remove();
  },

  _onChange: function(){
    this.setState({
      reviews: ReviewsStore.all()
    });
  },

  render: function () {
    var display;
    if (this.state.reviews){
      display = this.state.reviews.map(function(review){
        return(
          <ul>
            <li>{review.rating}</li>
            <li>{review.review_text}</li>
          </ul>
        );
      });
    } else {
      var display = "No Reviews Yet"
    }
    return (
      <div>
        {display}
      </div>
    );
  }
});
