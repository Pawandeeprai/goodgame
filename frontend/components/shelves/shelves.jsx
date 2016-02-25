var React = require('react');
var ShelvesStore = require('../../stores/shelves');
var ShelvesUtil = require('../../util/shelves');


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

  handleClick: function(e){
    e.preventDefault();
    var shelfId = {id: e.currentTarget.id};
    console.log(shelfId);
    ShelvesUtil.fetchShelfGames(shelfId);

  },

  render: function(){
    var that = this;
    var display = this.state.shelves.map(
      function(shelf){
        return (
          <div onClick={that.handleClick}
               className="shelf-div"
               key={shelf.id}
               id={shelf.id}>
            <label className="shelf-label">
              {shelf.title}
            </label>
          </div>
        );
      }
    );
    return (
    <div className="shelves-div">
      <div className="shelves-header">
        <h2>Shelves</h2>
      </div>
      <div className="shelf-names-div">
        {display}
      </div>
    </div>);
  }
});

module.exports = Shelves;
