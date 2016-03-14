var React = require('react');
var FavoriteGamesStore = require('../../stores/favorite_games');
var GamesUtil = require('../../util/games');


module.exports = React.createClass({
  getInitialState: function(){

    return {
      favorite: this.isFavorite(this.props.game.id)
    };
  },

  componentDidMount: function(){
    this.Listener = FavoriteGamesStore.addListener(this._onChange);
    GamesUtil.fetchFavoriteGames();
    this.setState({
      favorite: this.isFavorite(this.props.game.id)
    });
  },

  _onChange: function(){
    this.setState({
      favorite: this.isFavorite(this.props.game.id)
    });
  },

  componentWillUnmount: function(){
    this.Listener.remove();
  },

  isFavorite: function(gameId){
    return FavoriteGamesStore.isFavorite(gameId);
  },

  toggleFavorite: function(e){
    e.preventDefault();
    if (this.state.favorite){
      GamesUtil.removeFavorite(this.props.game.id);
    } else {
      GamesUtil.createFavorite(this.props.game.id);
    }
  },

  render: function () {
    var display;
    if (this.state.favorite) {
      display = "remove from favorites";
    } else {
      display = "add to favorites";
    }
    return (
      <button onClick={this.toggleFavorite} className="button favorte-button">
        {display}
      </button>
    );
  }
});
