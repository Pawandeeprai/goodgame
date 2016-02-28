var React = require('react');

module.exports = React.createClass({
  editShelf: function(){
    
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.editShelf}>
          <label className="new-shelf-label">new shelf title:</label>
          <input type="text" valueLink={this.linkState('title')}/>
          <input className="button" type="submit" value="add shelf"/>
        </form>
      </div>
    );
  }
});
