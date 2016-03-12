var React = require('react');
var SigninControl = require('./signin_signup');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <div className="signin-div-right">
          <div className="center-div">
            <h1>goodGame</h1>
            <div className="signin-create-div">
              <SigninControl/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
