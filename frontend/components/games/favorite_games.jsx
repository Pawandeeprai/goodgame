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

  componentWillUnmount: function(){
    this.Listener.remove();
  },

  getStateFromStore: function(){
    return FavoriteGamesStore.all();
  },

  render: function () {
    var display;
    if (this.state.games.length > 0){
      display = this.state.games.map(
        function(game){
          var link = "games/" + game.id;
          return (
            <li key={game.id} className="game-list-item">
              <Link to={link}>
                <img className="game-list-item-img" src={game.image} />
              </Link>
            </li>
          );
        });
    } else {
      display = (
        <h4><Link to="/search">find games to add to favorites</Link></h4>
      );
    }
    return (
      <div className="favorites-div">
        <ul className="favorites-ul"> <h3>Favorite Games</h3>
        {display}
        <div>
          <Link className="find-more" to="/search">find more games...</Link>
        </div>
      </ul>
      </div>
    );
  }
});
