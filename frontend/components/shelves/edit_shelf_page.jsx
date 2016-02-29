var React = require('react');
var ShelvesStore = require('../../stores/shelves');
var ShelvesUtil = require('../../util/shelves');
var DeleteShelf = require('./delete_shelf');
var ShelfEdit = require('./shelf_edit');
var NewShelf = require('./new_shelf_form2');

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

  render: function () {
    var display = this.state.shelves.map(
      function(shelf){
        return (
          <div key={shelf.id} className="edit-div-item"  >
            <ShelfEdit key={shelf.id}
                   shelf={shelf}/>
            <DeleteShelf shelf={shelf}/>
          </div>
        );
      }
    );
    return (
      <div className="edit-div">
        <NewShelf/>
        <div className="shelfedit-label-div">
          <label className="shelfedit-label">Shelf</label>
          <label className="editdelete-label">Delete</label>
          <label className="edit-label">Edit</label>
        </div>
        {display}
      </div>
    );
  }
});
