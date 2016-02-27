var React = require('react');

module.exports = React.createClass({
    render: function () {
      return (
        <form >
          <StarRating name="airbnb-rating" caption="Rate your stay!" totalStars={5} />
          <button type="submit" className="btn btn-submit">Submit Rating</button>
        </form>
      );
    }
});
