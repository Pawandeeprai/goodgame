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
              console.log(game.coverimg_url);
              return (
                <div>
                  <img src={game.coverimg_url}/>
                  <div>{game.title}</div>
                  <div>{game.description}</div>
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
