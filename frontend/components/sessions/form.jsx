var React = require('react');
var SessionsUtil = require('../../util/sessions');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;


var NewSessionForm = React.createClass({
  mixins: [LinkedStateMixin, History],

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
    this.history.push("/");
  },

  render: function(){
    return(
      <div className="signin-form-div">
        <form className="signin-form"onSubmit={this.createUser}>
          <label className="form-text">Username:</label><br/>
          <input type="text" valueLink={this.linkState('username')}/>
          <br/>
          <label className="form-text">Password:</label><br/>
          <input type="password" valueLink={this.linkState('password')}/>
          <br/>
          <input className="button" type="submit" value="Sign In"/>
        </form>

      </div>
    );
  }

});


module.exports = NewSessionForm;
