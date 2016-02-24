var React = require('react');
var ReactDOM = require('react-dom');

var AppDispatcher = require('./dispatcher/dispatcher');

var UsersUtil = require('./util/users');
var SessionsUtil = require('./util/sessions');
var GamesUtil = require('./util/games');

var App = require('./components/app');

var NewUsersForm = require('./components/users/form');
var NewSessionForm = require('./components/sessions/form');
var CurrentUser = require('./components/users/current_user');
var Games = require('./components/games/games');

var SessionsStore = require('./stores/sessions');


document.addEventListener("DOMContentLoaded",
  function(){
    var content = document.querySelector("#content");
    ReactDOM.render(
    <div>
      <App/>
    </div>, content);
  }
);

window.UsersUtil = UsersUtil;
