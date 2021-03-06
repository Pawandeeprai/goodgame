var React = require('react');
var Link = require('react-router').Link;


var SessionsStore = require('../stores/sessions');
var SessionsUtil = require('../util/sessions');

var NewUserForm = require('./users/form');
var NewSessionsForm = require('./sessions/form');
var NewShelfForm = require('./shelves/new_shelf_form');

var CurrentUser = require('./users/current_user');
var Logout = require('./sessions/logout');
var Games = require('./games/games');
var Shelves = require('./shelves/shelves');
var NavBar = require('./navbar');
var FavoriteGames = require('./games/favorite_games');
var AddReview = require('./reviews/add_review');
var SearchBar = require('./search/search_bar');
var SearchPage = require('./search/search_page');
var SearchGamePage = require('./search/game_page');
var SignInPage = require('./users/signin_page');



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
          <NavBar/>
          <div className="current-content">
            {this.props.children}
          </div>
        </div>
      );
    } else {
      things = (
        <SignInPage/>
      );
    }

    return (
      <div className="total-content">
        {things}
      </div>
    );
  }
});

module.exports = App;
