var React = require('react');
var ShelvesStore = require('../../stores/shelves');
var ShelvesUtil = require('../../util/shelves');
var Shelf = require('./shelf');
var DeleteShelf = require('./delete_shelf');
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
          <div key={shelf.id} className="shelf-div">
            <Shelf key={shelf.id} shelf={shelf} />
          </div>
        );
      }
    );
    return (
    <div className="shelves-div">
      <div className="shelves-header">
        <h3 className="shelves-header-text">
          Shelves
        </h3>
      </div>
      <div className="shelf-names-div">
        {display}
        <div>
          <Link className="edit-link" to="shelves/edit">edit shelves...</Link>
        </div>
      </div>
    </div>);
  }
});

module.exports = Shelves;
