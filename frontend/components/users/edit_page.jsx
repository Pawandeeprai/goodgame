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
        <form onSubmit={this.updateProfile} className="user-edit-form">
          <label>username
            <br/>
            <input type="text" valueLink={this.linkState('username')}/>
          </label>
          <br/>
          <label>name
            <br/>
            <input type="text" valueLink={this.linkState('name')}/>
          </label>
          <br/>
          <input className="button" type="submit" value="edit profile"/>
        </form>
        <img className="profile-edit-picture"
             src={SessionsStore.all().picture_url}/>
      </div>
    );
  }
});
