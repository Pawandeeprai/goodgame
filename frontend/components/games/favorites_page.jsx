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
              <div key={game.id} className="game-div" key={game.id}>
                <Link to={"/games/" + game.id}>
                  <img className="game-image" src={game.image}/>
                </Link>
                <h3 className="game-title">
                  <div className="game-title-div">
                    <Link to={"/games/" + game.id}>
                      {game.title}
                    </Link>
                  </div>
                  <p>{game.description.slice(0,300)}</p>
                </h3>
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
