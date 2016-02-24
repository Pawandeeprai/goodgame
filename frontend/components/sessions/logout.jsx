var React = require('react');
var SessionsUtil = require('../../util/sessions');

var Logout = React.createClass({
  logout: function(e){
    e.preventDefault();
    SessionsUtil.logoutCurrentUser(this.props.userid);
  },

  render: function(){
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.logout}>
          <input type="submit" value="Logout" />
        </form>
      </div>
    );
  }
});

module.exports = Logout;
