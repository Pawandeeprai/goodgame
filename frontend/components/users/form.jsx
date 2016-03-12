var React = require('react');
var UsersUtil = require('../../util/users');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;


var NewUserForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function(){
    return {
      username: '',
      name: '',
      password: '',
      password2: '',
      messages: ''
    };
  },

  createUser: function(e){
    e.preventDefault();
    if (this.state.password === this.state.password2){
      var user = this.state;
      UsersUtil.createUser(user);
      this.history.push("/");
    } else {
      this.setState({
        messages: "Passwords must match"
      });
    }
  },

  render: function(){
    return(
      <div className ="new-user-form-div">
        {this.state.messages}
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
          <label className="form-text">Retype Password:</label><br/>
          <input type="password" valueLink={this.linkState('password2')}/>
          <br/>
          <input className="button" type="submit" value="Sign Up"/>
        </form>
      </div>
    );
  }

});


module.exports = NewUserForm;
