var React = require('react');
var GamesUtil = require('../../util/games');

module.exports = React.createClass({
  addToShelf: function(e){
    e.preventDefault();
    GamesUtil.addGameToShelf({
      game_id: this.props.gameid,
      shelf_id: this.props.shelf.id
    });
  },

  render: function () {
    return (
      <li onClick={this.addToShelf}>
        {this.props.shelf.title}
      </li>
    );
  }
});
