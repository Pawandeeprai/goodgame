var React = require('react');
var NewUserForm = require('./form');
var NewSessionsForm = require('../sessions/form');
var MessagesStore = require('../../stores/messages');
var UsersUtil = require('../../util/users');
var History = require('react-router').History;


module.exports = React.createClass({
  mixins: [History],
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
  guestUserLogin: function(e){
    e.preventDefault();
    UsersUtil.createUser(
      {username: "guest"}
    );
    this.history.push("/");
  },
  render: function () {
    var display;
    var that = this;
    if (this.state.status === "signin") {
      display = (
        <div className="already-user">
          <NewSessionsForm message={that.state.message}/>
          Don't have an account? <a onClick={this.signup}>Create an account.</a><br/>
          Want to check things out? <a onClick={this.guestUserLogin}>guest login</a>
        </div>
      );
    } else {
      display = (
        <div className="already-user">
          <NewUserForm/>
          Have an account? <a onClick={this.signin}>login.</a><br/>
          Want to check things out? <a onClick={this.guestUserLogin}>guest login</a>
        </div>
      );

    }
    return (
      <div>
        {display}
      </div>
    );
  }
});
