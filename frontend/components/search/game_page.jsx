var React = require('react');
var SearchGameStore = require('../../stores/search_game');
var AddGameToShelfForm = require('../shelves/add_game_to_shelf.jsx');
var SearchUtil = require('../../util/search');
var History = require('react-router').History;
var UserReview = require('../reviews/user_review');


module.exports = React.createClass({
  mixins: [History],
  getInitialState: function(){
    return {
      game: SearchGameStore.all(),
      loading: false
    };
  },

  componentDidMount: function(){
    if (this.state.game.bgg_id !== this.props.params.bgg_id){
      this.setState({loading: true});
    }
    this.Listener = SearchGameStore.addListener(this._onChange);
    SearchUtil.getGameInfo(this.props.params.bgg_id);
  },


  _onChange: function(){
    this.setState({
      game: SearchGameStore.all()
    });
    this.setState({loading: false});
    if (this.state.game.id){
      this.history.push("/games/" + this.state.game.id);
    }
  },

  componentWillUnmount: function(){
    if (this.Listener){
      this.Listener.remove();
    }
  },

  render: function () {
    if (this.state.game && this.state.loading === false){
      return (
        <div className="new-game">
          <div className="game-picture-div">
            <img src={this.state.game.image}/>
            <ul>
              <li>minimum players: {this.state.game.minplayers}</li>
              <li>maximum players: {this.state.game.maxplayers}</li>
              <li>play time: {this.state.game.playtime}</li>
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
            <UserReview game={this.state.game}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="new-game">
          <div className="loader">Loading...</div>
        </div>);
    }
  }
});
