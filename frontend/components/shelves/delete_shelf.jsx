var React = require('react');
var ShelvesUtil = require('../../util/shelves');


module.exports = React.createClass({
  deleteShelf: function(){
    ShelvesUtil.deleteShelf(this.props.shelf.id);
  },

  render: function () {
    return (
      <img onClick={this.deleteShelf}
           className="delete-icon"
           src="https://upload.wikimedia.org/wikipedia/commons/b/b3/High-contrast-edit-delete.svg"/>
    );
  }
});
