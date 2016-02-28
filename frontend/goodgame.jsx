var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;


var AppDispatcher = require('./dispatcher/dispatcher');

var UsersUtil = require('./util/users');
var SessionsUtil = require('./util/sessions');
var GamesUtil = require('./util/games');
var ShelvesUtil = require('./util/shelves');

var App = require('./components/app');

var NewUsersForm = require('./components/users/form');
var NewSessionForm = require('./components/sessions/form');
var CurrentUser = require('./components/users/current_user');

var Games = require('./components/games/games');
var Shelves = require('./components/shelves/shelves');
var Shelf = require('./components/shelves/shelf');
var GameFullPage = require('./components/games/game_full_page');

var SessionsStore = require('./stores/sessions');
var ShelvesStore = require('./stores/shelves');


var routes = (
  <Route component={App} path="/">
    // TODO add index route
    <IndexRoute component={CurrentUser}/>

    <Route component={CurrentUser} path="/user">

    </Route>

    <Route component={Games} path="/shelves/:shelf_id">

    </Route>

    <Route component={GameFullPage} path="/games/:game_id">

    </Route>



  </Route>
);

document.addEventListener("DOMContentLoaded",
  function(){
    var content = document.querySelector("#content");
    ReactDOM.render(
    <Router>{routes}</Router>
    , content);
  }
);

window.UsersUtil = UsersUtil;
