var React = require('react');
var ShelvesStore = require('../../stores/shelves');
var ShelvesUtil = require('../../util/shelves');
var Link = require('react-router').Link;


module.exports = React.createClass({
  render: function () {
    return (
          <Link className="shelf-link" to={"/shelves/" + this.props.shelf.id}>
            {this.props.shelf.title}
          </Link>
    );
  }
});
