var React = require('react');
var GamesUtil = require('../../util/games');

module.exports = React.createClass({
  removeGame: function(e){
    e.preventDefault();
    GamesUtil.removeGameFromShelf({
      game_id: this.props.gameid,
      shelf_id: this.props.shelfid
    });
  },

  render: function () {
    return (
      <div>
        <img onClick={this.removeGame}
             className="delete-icon"
             src="assets/delete-2-xxl.png"/>
      </div>
    );
  }
});
