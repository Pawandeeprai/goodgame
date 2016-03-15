var React = require('react');
var Link = require('react-router').Link;
var History = require('react-router').History;

var Logout = require('./sessions/logout');
var ShelvesStore = require('../stores/shelves');
var ShelvesUtil = require('../util/shelves');
var NavSearchBar = require('./search/navsearch');


module.exports = React.createClass({
  mixins: [History],
  componentDidMount: function(){
    ShelvesUtil.fetchShelves();
  },
  linkToShelf: function(e){
    e.preventDefault();
    this.history.push("/shelves/" + ShelvesStore.all()[0].id);
  },
  render: function () {
    return (
      <div id="cssmenu">
        <ul>
          <li>
            <Link to ="/user">
              home
            </Link>
          </li>
          <li>
            <a onClick={this.linkToShelf}>
              shelves
            </a>
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
          <NavSearchBar />
          <Logout className="navbar-logout"/>
        </ul>
      </div>
    );
  }
});
