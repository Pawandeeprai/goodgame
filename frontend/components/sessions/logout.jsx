var React = require('react');
var SessionsUtil = require('../../util/sessions');

var Logout = React.createClass({
  logout: function(e){
    e.preventDefault();
    SessionsUtil.logoutCurrentUser(this.props.userid);
  },

  render: function(){
    return (
      <li className="navbar-logout" onClick={this.logout}>
        <a href="#">
          Logout
        </a>
      </li>

    );
  }
});

module.exports = Logout;
