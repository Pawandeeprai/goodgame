var React = require('react');
var SessionsStore = require('../../stores/sessions');
var Logout = require('../sessions/logout');


var CurrentUser = React.createClass({
  getInitialState: function(){
    return {user: SessionsStore.all()};
  },

  getStateFromStore: function () {
    return { user: SessionsStore.all() };
  },

  _onChange: function(){
    this.setState(this.getStateFromStore);
  },

  componentDidMount: function () {
  this.Listener = SessionsStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    // remove Listener
  },

  render: function(){
    return (
      <div>{this.state.user.username}
        <img src={this.state.user.picture_url}/>
        <Logout userid={this.state.user.id}/>
      </div>
    );
  }
});

module.exports = CurrentUser;
