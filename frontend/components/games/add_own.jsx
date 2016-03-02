var React = require('react');
var OwnedGamesStore = require('../../stores/owned_games');
var GamesUtil = require('../../util/games');


module.exports = React.createClass({
  getInitialState: function(){
    return {
      owned: this.isOwned(this.props.game.id)
    };
  },

  componentDidMount: function(){
    this.Listener = OwnedGamesStore.addListener(this._onChange);
    GamesUtil.fetchOwnedGames();
    this.setState({
      owned: this.isOwned(this.props.game.id)
    });
  },

  _onChange: function(){
    this.setState({
      owned: this.isOwned(this.props.game.id)
    });
  },

  componentWillUnmount: function(){
    this.Listener.remove();
  },

  isOwned: function(gameId){
    return OwnedGamesStore.isOwned(gameId);
  },

  toggleOwns: function(e){
    e.preventDefault();
    if (this.state.owned){
      GamesUtil.removeOwned(this.props.game.id);
    } else {
      GamesUtil.createOwned(this.props.game.id);
    }
  },

  render: function () {
    var display;
    if (this.state.owned) {
      display = "remove from owned games";
    } else {
      display = "add to owned games";
    }
    return (
      <button onClick={this.toggleOwns} className="button">
        {display}
      </button>
    );
  }
});
