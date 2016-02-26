var React = require('react');
var SessionsStore = require('../stores/sessions');
var SessionsUtil = require('../util/sessions');

var NewUserForm = require('./users/form');
var NewSessionsForm = require('./sessions/form');
var NewShelfForm = require('./shelves/new_shelf_form');

var CurrentUser = require('./users/current_user');
var Logout = require('./sessions/logout');
var Games = require('./games/games');
var Shelves = require('./shelves/shelves');

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
          <div className="logo-div">
            <img className="logo" src="assets/goodgamewhitelogo.png"/>
          </div>
          <div className="current-content">
            <div className="current-user-div">
              <CurrentUser/>
            </div>
            <Shelves/>
            <Games/>
          </div>
          <NewShelfForm/>
        </div>
      );
    } else {
      things = (
        <div>
          <div className="logo-div">
            <img className="logo" src="assets/goodgamewhitelogo.png"/>
          </div>
          <div className="new-user-forms">
            <NewUserForm/>
            <NewSessionsForm/>
          </div>
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
