var React = require('react');
var ShelvesStore = require('../../stores/shelves');
var ShelvesUtil = require('../../util/shelves');
var Shelf = require('./shelf');
var NewShelfForm = require('./new_shelf_form');
var Link = require('react-router').Link;


var Shelves = React.createClass({

  getInitialState: function(){
    return {shelves: ShelvesStore.all()};
  },

  getStateFromStore: function(){
    return {shelves: ShelvesStore.all()};
  },

  _onChange: function(){
    this.setState(this.getStateFromStore());
  },

  componentDidMount: function(){
    this.Listener = ShelvesStore.addListener(this._onChange);
    ShelvesUtil.fetchShelves();
  },

  componentWillUnmount: function(){
    this.Listener.remove();
  },


  render: function(){
    var that = this;
    var display = this.state.shelves.map(
      function(shelf){
        return (
          <Shelf key={shelf.id} shelf={shelf} />
        );
      }
    );
    return (
    <div className="shelves-div">
      <div className="shelves-header">
        <h2 className="shelves-header-text">Shelves</h2>
      </div>
      <div className="shelf-names-div">
        {display}
        <NewShelfForm/>
      </div>
    </div>);
  }
});

module.exports = Shelves;
