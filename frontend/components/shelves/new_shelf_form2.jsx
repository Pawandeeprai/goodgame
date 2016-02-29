var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ShelvesUtil = require('../../util/shelves');



module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      clicked: false,
      title: "add a shelf"
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



  render: function(){
    return (
      <div className="add-self-edit">
        <form onSubmit={this.createShelf}>
          <input type="text"
                 id="field-topsearch"
                 valueLink={this.linkState('title')}/>
          <input className="button" type="submit" value="add shelf"/>
        </form>
      </div>
    );
  }
});
