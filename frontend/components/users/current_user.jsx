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
    this.setState(this.getStateFromStore());
  },

  componentDidMount: function () {
  this.Listener = SessionsStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    // remove Listener
    this.Listener.remove();
  },

  render: function(){
    return (
      <div>
        <div className="current-user-name">
          {this.state.user.username}
        </div >
        <div className="current-user-img-div">
          <img className="current-user-img" src={this.state.user.picture_url}/>
        </div>
        <Logout userid={this.state.user.id}/>
      </div>
    );
  }
});

module.exports = CurrentUser;
