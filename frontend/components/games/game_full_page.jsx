var React = require('react');
var GamesStore = require('../../stores/games');
var AddGameToShelfForm = require('../shelves/add_game_to_shelf.jsx');
var GamesUtil = require('../../util/games');
var AddFavorite = require('./add_favorite');
var AddOwn = require('./add_own');
var Reviews = require('../reviews/reviews');
var UserReivew = require('../reviews/User_review');
// add remove game from shelf.. and find in all shelves might have to hit data base again

module.exports = React.createClass({
  getInitialState: function(){
    return {game: GamesStore.game(parseInt(this.props.params.game_id))};
  },

  componentDidMount: function(){
    if (this.state.game === undefined){
      this.Listener = GamesStore.addListener(this._onChange);
      GamesUtil.fetchGame(this.props.params.game_id);
    }
  },
    componentWillUnmount: function(){
      this.Listener.remove();
    },

  //TODO: componentWillReceiveProps(newProps)
  //DONT USEE this.props in this function

  _onChange: function(){
    this.setState({
      game: GamesStore.game(parseInt(this.props.params.game_id))
    });
  },


  render: function () {
    if (this.state.game === undefined){
      return <div></div>;
    } else {
      return (
        <div>
          <div className="game-picture-div">
            <img src={this.state.game.coverimg_url}/>
            <AddGameToShelfForm game={this.state.game}/>
          </div>
          <div className="game-info-div">
            <h1 className="game-info-title">{this.state.game.title}</h1>
            <p className="game-info-description">
              {this.state.game.description}
              <AddFavorite game={this.state.game}/>
              <UserReivew game={this.state.game}/>
              <Reviews game={this.state.game}/>
            </p>
          </div>
        </div>
      );
    }
  }
});
