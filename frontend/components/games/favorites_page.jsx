var React = require('react');
var FavoriteGamesStore = require('../../stores/favorite_games');

var GamesUtil = require('../../util/games');
var Link = require('react-router').Link;



var Games = React.createClass({
  getInitialState: function(){
    return {
      games: FavoriteGamesStore.all()
    };
  },

  getStateFromStore: function(){
    return{ games: FavoriteGamesStore.all()};
  },


  _onChange: function(){
    this.setState(this.getStateFromStore());
  },

  componentDidMount: function(){
    this.Listener = FavoriteGamesStore.addListener(this._onChange);
    GamesUtil.fetchFavoriteGames();
    this.setState({
      games: FavoriteGamesStore.all()
    });
  },

  componentWillUnmount: function(){
    this.Listener.remove();
  },

  render: function(){
    var display;
    var that = this;
      display =
        (
        this.state.games.map(
          function(game){
            return (
              <div className="game-div" key={game.id}>
                <h3 className="game-title">
                  <Link to={"/games/" + game.id}>
                    {game.title}
                  </Link>
                </h3>
                <img className="game-image" src={game.image}/>
                <div className="game-description-div">
                  <p className="game-description">{game.description}</p>
                </div>
              </div>
            );
          }
        )
      );
    return (
      <div><h1>Favorite Games</h1>
        <div>
          {display}
        </div>
      </div>
      );
  }
});

module.exports = Games;
