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
           src="http://www.iconsdb.com/icons/preview/gray/delete-2-xxl.png"/>
    );
  }
});
