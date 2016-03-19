var React = require('react');
var Rating = require('react-rating');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReviewsUtil = require('../../util/reviews');
var GamesUtil = require('../../util/games');
var GamesStore = require('../../stores/games');
var History = require('react-router').History;



module.exports = React.createClass({
  mixins: [LinkedStateMixin, History],

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
    if (this.props.game.id){
      ReviewsUtil.createReview(this.props.game.id, this.state);
    } else {
      GamesUtil.createGame(this.props.game);
      ReviewsUtil.createReviewUsingBggId(this.props.game.bgg_id, this.state);
      window.location.reload();
    }
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
            type="textarea"/>
          <br/>
          <input className="button" type="submit" value="edit review"/>
        </form>
      );
    } else {
      return (
        <form className="new-review" onSubmit={this.createReview}>
          <div className="user-rating">
            <Rating full="glyphicon glyphicon-star large"
              empty="glyphicon glyphicon-star-empty large"
              initialRate={this.state.rating}
              onChange={this.handleRating}/>
          </div>
          <br/>
          <textarea className="text-box"
            valueLink={this.linkState('review_text')}/>
          <br/>
          <input className="button" type="submit" value="add review"/>
        </form>
      );
    }
  }
});
