var React = require('react');
var Link = require('react-router').Link;

var Logout = require('./sessions/logout');
var ShelvesStore = require('../stores/shelves');
var ShelvesUtil = require('../util/shelves');
var SearchBar = require('./search/search_bar');


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
          <li>
            <Link to="/favorites">
              favorites
            </Link>
          </li>
          <li>
            <Link to="/search">
              games
            </Link>
          </li>
          <li>
            <SearchBar />
          </li>
          <Logout className="navbar-logout"/>
        </ul>
      </div>
    );
  }
});
