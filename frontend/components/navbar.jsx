var React = require('react');
var Link = require('react-router').Link;

var Logout = require('./sessions/logout');


module.exports = React.createClass({
  render: function () {
    return (
      <div id="cssmenu" className="logo-div">
        <ul>
          <li>
            <Link to ="/user">
              home
            </Link>
          </li>
          <Logout className="navbar-logout"/>
        </ul>
      </div>
    );
  }
});
