var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ShelvesUtil = require('../../util/shelves');



var NewShelfForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      clicked: false
    };
  },

  createShelf: function(e){
    e.preventDefault();
    var shelf = this.state;
    ShelvesUtil.createShelf(shelf);
    this.setState(function(){
      return {clicked: false};
    });
  },

  clicked: function(e){
    e.preventDefault();
    this.setState(function(){
      return {
        clicked: true,
        title: ""
      };
    });
  },

  render: function(){
    if (this.state.clicked){
      return (
        <div className="new-shelf-div">
          <form className="new-shelf-form" onSubmit={this.createShelf}>
            <label className="new-shelf-label">new shelf title:</label>
            <input type="text" valueLink={this.linkState('title')}/>
            <input className="button" type="submit" value="add shelf"/>
          </form>
        </div>
      );
    } else {
      return (
        <div >
          <form className="add-shelf-button" onSubmit={this.clicked}>
            <input id="side-button" className="button" type="submit" value="add shelf"/>
          </form>
        </div>
      );
    }
  }
});

module.exports = NewShelfForm;
