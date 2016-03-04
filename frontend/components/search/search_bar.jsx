var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SearchUtil = require('../../util/search');
var Link = require('react-router').Link;



module.exports = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function(){
    return {
      query_string: ""
    };
  },
  searchGame: function(e){
    e.preventDefault();
    if (this.state.query_string){
      SearchUtil.search({
        query_string: this.state.query_string
      });
    }
  },
  render: function () {
    return (
      <div className="nav-search">
        <input type="text" valueLink={this.linkState('query_string')}/>
        <Link to="/search" onClick={this.searchGame}>search</Link>
      </div>
    );
  }
});
