var React = require('react');
var SigninControl = require('./signin_signup');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <div className="signin-div-left">
          <SigninControl/>
        </div>
        <div className="signin-div-right">
          <h1>goodGame</h1>
          <h3>where people
            <br/>
            track games</h3>
        </div>
      </div>
    );
  }
});
