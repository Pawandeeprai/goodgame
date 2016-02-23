var React = require('react');
var ReactDOM = require('react-dom');

var AppDispatcher = require('./dispatcher/dispatcher');

var UsersUtil = require('./util/users');
var NewUsersForm = require('./components/users/form');
var NewSessionForm = require('./components/sessions/form');


document.addEventListener("DOMContentLoaded",
  function(){
    var content = document.querySelector("#content");
    ReactDOM.render(<div>
      <NewUsersForm/>
      <NewSessionForm/>
    </div>, content);
  }
);

window.UsersUtil = UsersUtil;
