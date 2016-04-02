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
      picture_url: SessionsStore.all().picture_url,
      message: ""
    };
  },

  updateProfile: function(e){
    e.preventDefault();
    if (this.state.username === ""){
      this.setState({message: "email can't be blank"});
    } else if (this.state.name === "") {
      this.setState({message: "name can't be blank"});
    } else {
      UsersUtil.editUser(this.state);
      this.history.push("/");
    }
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
    var display = <input type="text" valueLink={this.linkState('username')}/>;
    if (this.state.username.slice(0,5) === "guest"){
      display = <input type="text" value="can't change guest acccount email"/>;
    }
    return (
      <div>
        <h1>Profile Settings</h1>
        <form onSubmit={this.updateProfile} className="user-edit-form">
          {this.state.message}<br/>
          <label>email
            <br/>
            {display}
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
