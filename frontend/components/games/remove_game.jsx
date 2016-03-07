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
      <div className="remove-from-shelf-div">
        <form onSubmit={this.removeGame}>
          <input type="submit"
                 className="button"
                 value="remove from shelf"/>
        </form>

      </div>
    );
  }
});
