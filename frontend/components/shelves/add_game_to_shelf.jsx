var React = require('react');
var ShelvesStore = require('../../stores/shelves');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ShelvesUtil = require('../../util/shelves');
var GamesUtil = require('../../util/games');
var ShelfChoice = require('./shelf_choice');

// TODO change this to use <ul> and li


module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      shelves: this.getStateFromStore(),
      shelf_id: "",
      clicked: false
    };
  },

  getStateFromStore: function(){
    return ShelvesStore.all();
  },

  componentDidMount: function(){
    this.Listener = ShelvesStore.addListener(this._onChange);
    ShelvesUtil.fetchShelves();
  },

  _onChange: function(){
    this.setState({shelves: this.getStateFromStore()});
  },

  componentWillUnmount: function(){
    this.Listener.remove();
  },

  addToShelf: function(e){
    e.preventDefault();
    GamesUtil.addGameToShelf({
      shelf_id: parseInt(this.state.shelf_id),
      game_id: this.props.game.id
    });
  },
  toggleClicked: function(e){
    e.preventDefault();
    if (this.state.clicked){
      this.setState({clicked: false});
    } else {
      this.setState({clicked: true});
    }
  },

  render: function () {
    var options="";
    var that = this;
    if (this.state.clicked === true){
      options = this.state.shelves.map(
        function(shelf) {
          return (
            <div onClick={this.toggleClicked}>
              <ShelfChoice key={shelf.id}
                gameid={that.props.game.id}
                shelf={shelf}/>
            </div>
          );
        }
      );
    }
    return (
      <div className="add-game-dropdown">
        <h4 onClick={this.toggleClicked}>add to shelf</h4>
        {options}
      </div>
    );
  }
});
