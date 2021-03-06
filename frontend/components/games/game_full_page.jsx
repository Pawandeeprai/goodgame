var React = require('react');
var GamesStore = require('../../stores/games');
var AddGameToShelfForm = require('../shelves/add_game_to_shelf.jsx');
var GamesUtil = require('../../util/games');
var Rating = require('react-rating');
var AddFavorite = require('./add_favorite');
var AddOwn = require('./add_own');
var Reviews = require('../reviews/reviews');
var UserReivew = require('../reviews/user_review');
// add remove game from shelf.. and find in all shelves might have to hit data base again

module.exports = React.createClass({
  getInitialState: function(){
    return {game: GamesStore.game(parseInt(this.props.params.game_id))};
  },


  componentDidMount: function(){
    this.Listener = GamesStore.addListener(this._onChange);
    GamesUtil.fetchGame(this.props.params.game_id);

  },
    componentWillUnmount: function(){
      if (this.Listener){
        this.Listener.remove();
      }
    },

    componentWillReceiveProps: function(nextProps){
      this.setState({
        game: GamesStore.game(parseInt(this.props.params.game_id))
      });
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
        <div className="game-full-div">
          <div className="game-picture-div">
            <img src={this.state.game.image}/>
            <AddFavorite game={this.state.game}/>
              <h4></h4>
              <div className="average-rating">
                <Rating full="glyphicon glyphicon-star large"
                  empty="glyphicon glyphicon-star-empty large"
                  initialRate={parseInt(this.state.game.rating)}
                  readonly={true}/>
              </div>
              <ul>
                <li>minimum players: {this.state.game.minplayers}</li>
                <li>maximum players: {this.state.game.maxplayers}</li>
                <li>play time: {this.state.game.playtime} mins</li>
              </ul>
              <AddGameToShelfForm game={this.state.game}/>
          </div>
          <div className="game-info-div">
            <h1 id="game-info-title">
              {this.state.game.title} ({this.state.game.yearpublished})
            </h1>
            <p className="game-info-description">
              {this.state.game.description}
            </p>
          </div>
          <div className="full-review-div">
            <UserReivew game={this.state.game}/>
            <Reviews game={this.state.game}/>
          </div>
        </div>
      );
    }
  }
});
