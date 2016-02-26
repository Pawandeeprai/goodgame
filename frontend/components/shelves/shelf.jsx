var React = require('react');
var ShelvesStore = require('../../stores/shelves');
var ShelvesUtil = require('../../util/shelves');
var Link = require('react-router').Link;


module.exports = React.createClass({
  render: function () {
    return (
        <div className="shelf-div">
          <label className="shelf-label">
            <Link to={"/shelves/" + this.props.shelf.id}>
              {this.props.shelf.title}
            </Link>
          </label>
        </div>
    );
  }
});
