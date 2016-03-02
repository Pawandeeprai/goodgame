var React = require('react');
var FavoriteGamesStore = require('../../stores/favorite_games');
var GamesUtil = require('../../util/games');
var Link = require('react-router').Link;

module.exports = React.createClass({
  getInitialState: function(){
    return {games: this.getStateFromStore()};
  },

  componentDidMount: function(){
    this.Listener = FavoriteGamesStore.addListener(this._onChange);
    GamesUtil.fetchFavoriteGames();
    this.setState({
      games: this.getStateFromStore()
    });
  },

  _onChange: function(){
    this.setState({
      games: this.getStateFromStore()
    });
  },

  getStateFromStore: function(){
    return FavoriteGamesStore.all();
  },

  render: function () {
    var display = this.state.games.map(
      function(game){
        var link = "games/" + game.id;
        return (
          <li key={game.id} className="game-list-item">
            <img className="game-list-item-img" src={game.coverimg_url} />
            <Link to={link}>
              {game.title}
            </Link>
          </li>
        );
    });
    return (
      <div className="favorites-div">
        <ul className="favorites-ul"> <h3>Favorite Games</h3>
        {display}
      </ul>
      </div>
    );
  }
});
