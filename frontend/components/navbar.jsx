var React = require('react');
var Link = require('react-router').Link;

var Logout = require('./sessions/logout');


module.exports = React.createClass({
  render: function () {
    return (
      <div className="logo-div">
        <Link to ="/user">
        <img className="logo" src="assets/goodgamewhitelogo.png"/>
        </Link>
        <Logout className="navbar-logout"/>
        <Link className="navbar-home" to ="/user">
          home
        </Link>
      </div>
    );
  }
});
