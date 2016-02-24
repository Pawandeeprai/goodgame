var React = require('react');

var GamesStore = require('../../stores/games');
var GamesUtil = require('../../util/games');


var Games = React.createClass({
  getInitialState: function(){
    return{ games: GamesStore.all()};
  },

  getStateFromStore: function(){
    return{ games: GamesStore.all()};
  },

  _onChange: function(){
    this.setState(this.getStateFromStore());
  },
  componentDidMount: function(){
    GamesUtil.fetchGames();
    this.Listener = GamesStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.Listener.remove();
  },

  render: function(){
    var display;

    if (this.state.games.length === 0 ){
      display = "Snippy sandwich";
    } else {
      display =
        (
          this.state.games.map(
            function(game){
              return (
                <div key={game.id}>
                  <img src={game.coverimg_url}/>
                  <h3>{game.title}</h3>
                  <p>{game.description}</p>
                </div>
              );
            }
          )
        );
    }
    return (
      <div>
        {display}
      </div>
      );
  }
});

module.exports = Games;
