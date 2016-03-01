var React = require('react');
var SessionsStore = require('../../stores/sessions');
var UsersUtil = require('../../util/users');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var Link = require('react-router').Link;


module.exports = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return {
      username: SessionsStore.all().username,
      name: SessionsStore.all().name
    };
  },

  updateProfile: function(e){
    e.preventDefault();
    UsersUtil.editUser(this.state);
  },

  render: function () {
    return (
      <div>
        <h1>Profile Settings</h1>
        <form onSubmit={this.updateProfile}>
          <label>username</label>
          <br/>
          <input type="text" valueLink={this.linkState('username')}/>
          <br/>
          <label>name</label>
          <br/>
          <input type="text" valueLink={this.linkState('name')}/>
          <br/>
          <input type="submit" value="edit profile"/>
        </form>
        <Link to="shelves/edit">
          Edit Shelves
          <img className="edit-icon" src="assets/edit-xxl.png" />
        </Link>
      </div>
    );
  }
});
