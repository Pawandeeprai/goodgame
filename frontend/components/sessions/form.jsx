var React = require('react');
var SessionsUtil = require('../../util/sessions');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var NewSessionForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      username: '',
      password: ''
    };
  },

  createUser: function(e){
    e.preventDefault();
    var user = this.state;
    SessionsUtil.createSession(user);
  },

  render: function(){
    return(
      <div>
        <form onSubmit={this.createUser}>
          <label>Username:</label>
          <input type="text" valueLink={this.linkState('username')}/>
          <br/>
          <label>Password:</label>
          <input type="password" valueLink={this.linkState('password')}/>
          <br/>
          <input type="submit" value="Sign In"/>
        </form>
      </div>
    );
  }

});


module.exports = NewSessionForm;
