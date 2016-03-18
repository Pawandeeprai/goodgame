var React = require('react');
var SigninControl = require('./signin_signup');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="signin-div-right">
        <div className="center-div">
          <h1>goodGame</h1>
          <div className="signin-create-div">
            <SigninControl/>
          </div>
          <div className="words-div">
            <h2>search</h2><h2>⚅</h2>
            <h2>shelve</h2><h2>⚅</h2>
            <h2>play</h2>
          </div>
        </div>
      </div>
    );
  }
});
