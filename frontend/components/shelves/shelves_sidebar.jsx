var React = require('react');
var ShelvesStore = require('../../stores/shelves');
var ShelvesUtil = require('../../util/shelves');
var Shelf = require('./shelf');
var NewShelfForm = require('./new_shelf_form');
var Link = require('react-router').Link;
var DeleteShelf = require('./delete_shelf');



module.exports = React.createClass({

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
          <div className="shelf-item-sidebar-div">
            <Shelf className="shelf-item-sidebar" key={shelf.id} shelf={shelf}/>
            <DeleteShelf shelf={shelf}/>
          </div>
        );
      }
    );
    return (
    <div className="shelf-sidebar">
      <div className="shelves-header">
        <h2 className="shelves-header-text">Shelves</h2>
      </div>
      <div >
        {display}
        <NewShelfForm/>
      </div>
    </div>);
  }
});
