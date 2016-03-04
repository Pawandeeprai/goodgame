var React = require('react');
var UserReviewsStore = require('../../stores/user_reviews');
var AddReview = require('./add_review');
var ReviewsUtil = require('../../util/reviews');
var Rating = require('react-rating');



module.exports = React.createClass({
  getInitialState: function(){
    return {
      review: false,
      reviewed: false
    };
  },

  componentDidMount: function(){
    this.Listener = UserReviewsStore.addListener(this._onChange);
    ReviewsUtil.fetchUserReivews(this.props.game.id);
  },

  _onChange: function(){
    this.setState({
      review: this.getStateFromStore()
    });
    if (this.state.review){
      this.setState({
        reviewed: true
      });
    }
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
    this.setState({
      reviewed: false
    });
  },
  editReview: function(e){
    e.preventDefault();
    this.setState({
      reviewed: false
    });
  },

  render: function () {
    var display;
      var that = this;
    if (this.state.reviewed){
      display = (
        <ul key={this.state.review.id}>
          <li>
            <Rating className="rating"
                    full="glyphicon glyphicon-star large"
                    empty="glyphicon glyphicon-star-empty large"
                    initialRate={this.state.review.rating}/>
          </li>
          <li>
            {this.state.review.review_text}
          </li>
          <div>
            <img src="http://www.iconsdb.com/icons/preview/gray/delete-2-xxl.png"
              className="icon"
              onClick={that.removeReview}/>
            <img src="http://www.iconsdb.com/icons/preview/gray/edit-xxl.png"
              className="icon"
              onClick={that.editReview}/>
          </div>
        </ul>
      );
    } else {
      display = <AddReview review={this.state.review} game={this.props.game} />;
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
