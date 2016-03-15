var React = require('react');
var SessionsStore = require('../../stores/sessions');
var UsersUtil = require('../../util/users');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;


var Link = require('react-router').Link;


module.exports = React.createClass({
  mixins: [LinkedStateMixin, History],
  getInitialState: function() {
    return {
      username: SessionsStore.all().username,
      name: SessionsStore.all().name,
      picture_url: SessionsStore.all().picture_url
    };
  },

  updateProfile: function(e){
    e.preventDefault();
    UsersUtil.editUser(this.state);
    this.history.push("/");
  },

  uploadImage: function(e){
    e.preventDefault();
    var that = this;
    var image = cloudinary.openUploadWidget(
      {cloud_name: "dnsrynhjb",
      upload_preset: "daftljdm",
      theme: "minimal" },
      function(error, result){
        if (result){
          that.setState({picture_url: result[0].secure_url});
        }
      }
    );
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
          <input className="button" type="submit" value="save changes"/>
        </form>
        <div className="upload-image">
          <img className="profile-edit-picture"
            src={this.state.picture_url}/>
          <input className="button"
            type="submit"
            onClick={this.uploadImage}
            value="upload image"/>
        </div>
      </div>
    );
  }
});
