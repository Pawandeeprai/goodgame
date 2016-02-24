var React = require('react');
var SessionsStore = require('../stores/sessions');
var SessionsUtil = require('../util/sessions');

var NewUserForm = require('./users/form');
var NewSessionsForm = require('./sessions/form');

var CurrentUser = require('./users/current_user');
var Logout = require('./sessions/logout');
var Games = require('./games/games');

var App = React.createClass({

  getInitialState: function(){
    return {loggedIn: false};
  },

  componentDidMount: function(){
    // do a check for current_user
    // calls a fetch method
    SessionsUtil.fetchCurrentUser();
    this.Listener = SessionsStore.addListener(this._onChange);
  },

  _onChange: function(){
    if (SessionsStore.isCurrentUser() ){
      this.setState({loggedIn: true});
    } else {
      this.setState({loggedIn: false});
    }
  },

  render: function(){
    var things;
    if (this.state.loggedIn){
      things = (
        <div>
          <CurrentUser/>
          <Games/>
        </div>
      );
    } else {
      things = (
        <div>
          <NewUserForm/>
          <NewSessionsForm/>
        </div>
      );
    }

    return (
      <div>
        {things}
      </div>
    );
  }
});

module.exports = App;
