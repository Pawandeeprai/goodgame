var React = require('react');
var Rating = require('react-rating');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReviewsUtil = require('../../util/reviews');


module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      rating: this.props.review.rating,
      review_text: this.props.review.review_text,
      id: this.props.review.id
    };
  },

  handleRating: function(e){
    this.setState({
      rating: e
    });
  },

  createReview: function(e){
    e.preventDefault();
    ReviewsUtil.createReview(this.props.game.id, this.state);
  },

  editReview: function(e){
    e.preventDefault();
    ReviewsUtil.editReview(this.props.game.id, this.state);
  },

  render: function () {
    if (this.props.review){
      return (
        <form className="new-review" onSubmit={this.editReview}>
          <Rating full="glyphicon glyphicon-star large"
            empty="glyphicon glyphicon-star-empty large"
            initialRate={this.props.review.rating}
            onChange={this.handleRating}/>
          <br/>
          <input className="text-box"
            valueLink={this.linkState('review_text')}
            type="text-box"/>
          <br/>
          <input className="button" type="submit" value="edit review"/>
        </form>
      );
    } else {
      return (
        <form className="new-review" onSubmit={this.createReview}>
          <Rating full="glyphicon glyphicon-star large"
            empty="glyphicon glyphicon-star-empty large"
            initialRate={this.state.rating}
            onChange={this.handleRating}/>
          <br/>
          <input className="text-box"
            valueLink={this.linkState('review_text')}
            type="text-box"/>
          <br/>
          <input className="button" type="submit" value="add review"/>
        </form>
      );
    }
  }
});
