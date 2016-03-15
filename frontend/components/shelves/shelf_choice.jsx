var React = require('react');
var GamesUtil = require('../../util/games');
var ShelvesUtil = require('../../util/shelves');
var GamesStore = require('../../stores/games');

module.exports = React.createClass({
  getInitialState: function(){
    return {on_shelf: false};
  },

  componentDidMount: function(){
    var that = this;
    if (this.props.game.shelves){
      this.props.game.shelves.forEach(function(shelf){
        if (shelf.id === that.props.shelf.id){
          that.setState({on_shelf: true});
        }
      });
    }
  },

  addToShelf: function(e){
    e.preventDefault();
    if (this.props.game.id){
      GamesUtil.addGameToShelf({
        game_id: this.props.game.id,
        shelf_id: this.props.shelf.id
      });
    } else {
      GamesUtil.createGame(this.props.game, this.props.shelf.id);
    }
    this.setState({on_shelf: true});
  },

  removeFromShelf: function(e){
    e.preventDefault();
    GamesUtil.removeGameFromShelfSoftly({
      game_id: this.props.game.id,
      shelf_id: this.props.shelf.id
    });
    this.setState({on_shelf: false});
  },

  render: function () {
    if (this.state.on_shelf){
      return (
        <li>
          {this.props.shelf.title}
          <input onClick={this.removeFromShelf}
            className="button"
            type="submit"
            value="Remove"/>
        </li>
      );
    } else {
      return (
        <li>
          {this.props.shelf.title}
          <input onClick={this.addToShelf}
            className="button"
            type="submit"
            value="Add"/>
        </li>
      );
    }

  }
});
