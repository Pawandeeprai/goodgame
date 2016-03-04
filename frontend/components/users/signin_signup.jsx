var React = require('react');
var NewUserForm = require('./form');
var NewSessionsForm = require('../sessions/form');

module.exports = React.createClass({
  getInitialState: function(){
    return {status: "blank"};
  },

  signin: function(e){
    e.preventDefault();
    this.setState({
      status: "signin"
    });
  },

  signup: function(e){
    e.preventDefault();
    this.setState({
      status: "signup"
    });
  },
  render: function () {
    var display;
    if (this.state.status === "blank"){
      display = (
        <div className="splash-blank" >
          <h2>search</h2><br/>
          <h2>shelve</h2><br/>
          <h2>play</h2>
        </div>
      );
    } else if (this.state.status === "signin") {
      display = <NewSessionsForm/>;
    } else {
      display = <NewUserForm/>;
    }
    return (
      <div>
        <div className="sign-in-buttons">
          <h3 onClick={this.signin}>sign in</h3>
          <h3 onClick={this.signup}>sign up</h3>
        </div>
        {display}
      </div>
    );
  }
});
