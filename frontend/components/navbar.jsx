var React = require('react');
var Link = require('react-router').Link;

var Logout = require('./sessions/logout');
var ShelvesStore = require('../stores/shelves');
var ShelvesUtil = require('../util/shelves');


module.exports = React.createClass({

  render: function () {
    console.log(this.state);
    return (
      <div id="cssmenu">
        <ul>
          <li>
            <Link to ="/user">
              home
            </Link>
          </li>
          <li>
            <Link to="/shelves/0">
              shelves
            </Link>
          </li>
          <Logout className="navbar-logout"/>
        </ul>
      </div>
    );
  }
});
