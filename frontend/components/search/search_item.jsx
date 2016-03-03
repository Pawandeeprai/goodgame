var React = require('react');
var SearchUtil = require('../../util/search');
var Link = require('react-router').Link;



module.exports = React.createClass({
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      info: nextProps.info
    });
  },
  handleClick: function(e){
    e.preventDefault();
    SearchUtil.getGameInfo(this.props.info.id);
  },
  render: function () {
    var published;
    if (this.props.info.yearpublished){
      published = this.props.info.yearpublished[0].value;
    } else {
      published = "";
    }
    var that = this;
    return (
      <div>
          <li onClick={that.handleClick}>
            <h5>
              <Link to="/game">
              {that.props.info.name[0].value} ({published})
              </Link>
            </h5>
          </li>
      </div>
    );
  }
});
