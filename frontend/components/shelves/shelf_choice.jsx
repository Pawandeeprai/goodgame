var React = require('react');
var GamesUtil = require('../../util/games');

module.exports = React.createClass({
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
  },

  render: function () {
    return (
      <li onClick={this.addToShelf}>
        {this.props.shelf.title}
      </li>
    );
  }
});
