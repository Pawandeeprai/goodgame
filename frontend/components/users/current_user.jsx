var React = require('react');
var Link = require('react-router').Link;
var SessionsStore = require('../../stores/sessions');
var Logout = require('../sessions/logout');
var Shelves = require('../shelves/shelves');


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

  memberSince: function(){
    return this.state.user.created_at.slice(0,4);
  },

  render: function(){
    return (
      <div className="current-user-div">
        <div className="current-user-img-div">
          <img className="current-user-img" src={this.state.user.picture_url}/>
        </div>
        <div className="current-user-name">
          {this.state.user.username}
          <Link className="user-edit-link" to="users/edit">
            (edit profile)
          </Link>
          <br/>
          <label className="member-since-label">
            Member Since:
            {this.memberSince()}
          </label>
        </div >
        <Shelves/>
        <Logout userid={this.state.user.id}/>
      </div>
    );
  }
});

module.exports = CurrentUser;
