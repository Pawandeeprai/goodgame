var React = require('react');
var GamesStore = require('../../stores/games');

module.exports = React.createClass({
  getInitialState: function(){
    return {game: GamesStore.game(parseInt(this.props.params.game_id))};
  },


  render: function () {
    if (this.state.game === undefined){
      return <div></div>;
    } else {
      return (
        <div>
          <div className="game-picture-div">
            <img src={this.state.game.coverimg_url}/>
          </div>
          <div className="game-info-div">
            <h1 className="game-info-title">{this.state.game.title}</h1>
            <p className="game-info-description">
              {this.state.game.description}
            </p>
          </div>
        </div>
      );
    }
  }
});
