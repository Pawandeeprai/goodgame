var React = require('react');
var NewUserForm = require('./form');
var NewSessionsForm = require('../sessions/form');
var MessagesStore = require('../../stores/messages');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      status: "signin",
      message: ""
    };
  },

  componentDidMount: function(){
    this.Listener = MessagesStore.addListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      message: MessagesStore.all()[0]
    });
  },

  componentWillUnmount: function(){
    this.Listener.remove();
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
    var that = this;
    if (this.state.status === "signin") {
      display = (
        <div className="already-user">
          <NewSessionsForm message={that.state.message}/>
          Not already a user? <a onClick={this.signup}>Create an account.</a>
        </div>
      );
    } else {
      display = (
        <div className="already-user">
          <NewUserForm/>
          Already a user? <a onClick={this.signin}>login.</a>
        </div>
      );

    }
    return (
      <div>
        {display}
        <h2>search</h2><h2>⚅</h2>
        <h2>shelve</h2><h2>⚅</h2>
        <h2>play</h2>
      </div>
    );
  }
});
