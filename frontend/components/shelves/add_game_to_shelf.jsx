var React = require('react');
var ShelvesStore = require('../../stores/shelves');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ShelvesUtil = require('../../util/shelves');
var GamesUtil = require('../../util/games');

// TODO change this to use <ul> and li


module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {shelves: this.getStateFromStore(), shelf_id: ""};
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

  render: function () {
    var options = this.state.shelves.map(
      function(shelf) {
        return (
          <option className="shelf-option" value={shelf.id} key={shelf.id}>
                  {shelf.title}
          </option>
        );
      }
    );
    return (
      <div>
        <form onSubmit={this.addToShelf}>
          <select valueLink={this.linkState('shelf_id')} name="dropdown">
            {options}
          </select>
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
});
