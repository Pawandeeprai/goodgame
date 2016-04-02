var React = require('react');

var GamesStore = require('../../stores/games');
var GamesUtil = require('../../util/games');
var ShelvesUtil = require('../../util/shelves');
var Link = require('react-router').Link;
var ShelvesSidebar = require('../shelves/shelves_sidebar');
var RemoveGame = require('./remove_game');
var ShelvesStore = require('../../stores/shelves');



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
    this.setState({shelf_id: nextProps.params.shelf_id});
  },

  _onChange: function(){
    this.setState(this.getStateFromStore());
  },

  componentDidMount: function(){
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
      display =
      <h2 className="empty-self-header">
        Selected shelf is empty
      </h2>;
    } else {
      display =
        (
          this.state.games.map(
            function(game){
              return (
                <div key={game.id} className="game-div" key={game.id}>
                  <div className="game-div-inner">
                    <div className="remove-from">
                      <Link to={"/games/" + game.id}>
                        <img className="game-image" src={game.image}/>
                      </Link>
                      <RemoveGame key={game.id}
                        gameid={game.id}
                        shelfid={that.props.params.shelf_id}/>
                    </div>
                    <div className="game-desc">
                      <h3 className="game-title">
                        <Link to={"/games/" + game.id}>
                          {game.title}
                        </Link>
                      </h3>
                      <p>{game.description.slice(0,600)}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )
        );
    }
    var shelfName = "";
    if (this.state.shelf_id){
      shelfName = ShelvesStore.findShelfName(this.state.shelf_id);
    }
    return (
      <div className="shelves-div-div">
        <h1>My Games: {shelfName}</h1>
        <ShelvesSidebar className="shelf-sidebar"/>
          {display}
      </div>
      );
  }
});

module.exports = Games;
