var React = require('react');

var GamesStore = require('../../stores/games');
var GamesUtil = require('../../util/games');
var ShelvesUtil = require('../../util/shelves');
var Link = require('react-router').Link;
var ShelvesSidebar = require('../shelves/shelves_sidebar');
var RemoveGame = require('./remove_game');



var Games = React.createClass({
  getInitialState: function(){
    return {
      games: GamesStore.all()
      , shelf_id: ""
    };
  },

  getStateFromStore: function(){
    return{ games: GamesStore.all()};
  },

  componentWillReceiveProps: function(nextProps) {
    ShelvesUtil.fetchShelfGames(parseInt(nextProps.params.shelf_id));
    this.setState({
      shelf_id: parseInt(nextProps.params.shelf_id)
    });
  },

  _onChange: function(){
    this.setState(this.getStateFromStore());
  },

  componentDidMount: function(){
    // GamesUtil.fetchGames();
    this.Listener = GamesStore.addListener(this._onChange);
    ShelvesUtil.fetchShelfGames(parseInt(this.props.params.shelf_id));
    this.setState({
      shelf_id: parseInt(this.props.params.shelf_id)
    });
    //this gets the shelf id from the router stuff in goodgame.jsx
  },

  componentWillUnmount: function(){
    this.Listener.remove();
  },

  render: function(){
    var display;
    var that = this;
    if (this.state.games.length === 0 ){
      display = "Snippy sandwich";
    } else {
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
                    <RemoveGame key={game.id}
                                gameid={game.id}
                                shelfid={that.state.shelf_id}/>
                  </h3>
                  <img className="game-image" src={game.coverimg_url}/>
                  <img className="console-logo" src={game.console}/>
                  <p className="game-description">{game.description}</p>
                </div>
              );
            }
          )
        );
    }
    return (
      <div>
        <ShelvesSidebar className="shelf-sidebar"/>
        <div className="game-displays">
          {display}
        </div>
      </div>
      );
  }
});

module.exports = Games;
