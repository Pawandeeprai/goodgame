var Rating = require('react-rating');
var React = require('react');
var ReviewsStore = require('../../stores/reviews');
var ReviewsUtil = require('../../util/reviews');

module.exports = React.createClass({
  getInitialState: function(){
    return {
    };
  },

  componentDidMount: function(){
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
          <ul key={review.id}>
            <li>
              <Rating full="glyphicon glyphicon-star large"
                      empty="glyphicon glyphicon-star-empty large"
                      initialRate={review.rating}/>
            </li>
            <li>{review.review_text}</li>
          </ul>
        );
      });
    } else {
      display = "No Reviews Yet";
    }
    return (
      <div className="reviews">
        <h3>All Reviews of {this.props.game.title}</h3>
        {display}
      </div>
    );
  }
});
