var React = require('react');
var SessionsStore = require('../../stores/sessions');


var CurrentUser = React.createClass({
  getInitialState: function(){
    return {user: "empty"};
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

  render: function(){
    return (
      <div>{this.state.user.username}
        <img src={this.state.user.picture_url}/>
      </div>
    );
  }
});

module.exports = CurrentUser;
