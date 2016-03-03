var React = require('react');
var SearchGameStore = require('../../stores/search_game');

module.exports = React.createClass({
  getInitialState: function(){
    return {game: SearchGameStore.all()};
  },

  componentDidMount: function(){
    this.Listener = SearchGameStore.addListener(this._onChange);
  },


  _onChange: function(){
    this.setState({
      game: SearchGameStore.all()
    });
  },

  componentWillUnmount: function(){
    this.Listener.remove();
  },


  render: function () {
    if (this.state.game){
      return (
        <div className="new-game">
          <div className="game-picture-div">
            <img src={this.state.game.image}/>
            <h4>{this.state.game.yearpublished}</h4>
            <ul>
              <li>minimum players: {this.state.game.minplayers}</li>
              <li>maximum players: {this.state.game.maxplayers}</li>
              <li>play time: {this.state.game.playtime}</li>
            </ul>
          </div>
          <div className="game-info-div">
            <h1 className="game-info-title">
              {this.state.game.title}
            </h1>
            <p className="game-info-description">
              {this.state.game.description}
            </p>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
});
