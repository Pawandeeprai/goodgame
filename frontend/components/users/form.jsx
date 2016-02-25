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
      <div className ="new-user-form-div">
        <h1 className="form-header">Sign Up</h1>
        <form onSubmit={this.createUser}>
          <label className="form-text">Username:</label><br/>
          <input type="text" valueLink={this.linkState('username')}/>
          <br/>
          <label className="form-text">Name:</label><br/>
          <input type="text" valueLink={this.linkState('name')}/>
          <br/>
          <label className="form-text">Password:</label><br/>
          <input type="password" valueLink={this.linkState('password')}/>
          <br/>
          <input className="button" type="submit" value="Sign Up"/>
        </form>
      </div>
    );
  }

});


module.exports = NewUserForm;
