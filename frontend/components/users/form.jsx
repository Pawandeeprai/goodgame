var React = require('react');
var UsersUtil = require('../../util/users');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var NewUserForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      username: '',
      name: '',
      password: ''
    };
  },

  createUser: function(e){
    e.preventDefault();
    var user = this.state;
    UsersUtil.createUser(user);
  },

  render: function(){
    return(
      <div className ="new-user-form">
        <h1>Sign Up</h1>
        <form onSubmit={this.createUser}>
          <label>Username:</label>
          <input type="text" valueLink={this.linkState('username')}/>
          <br/>
          <label>Name:</label>
          <input type="text" valueLink={this.linkState('name')}/>
          <br/>
          <label>Password:</label>
          <input type="password" valueLink={this.linkState('password')}/>
          <br/>
          <input type="submit" value="Sign Up"/>
        </form>
      </div>
    );
  }

});


module.exports = NewUserForm;
