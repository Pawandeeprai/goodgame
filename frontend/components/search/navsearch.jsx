var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SearchUtil = require('../../util/search');
var Link = require('react-router').Link;
var History = require('react-router').History;



module.exports = React.createClass({
  mixins: [LinkedStateMixin, History],
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
      this.history.push("search/");
    }
  },
  render: function () {
    return (
        <li id="search-li">
          <form className="nav-search" onSubmit={this.searchGame}>
            <input type="text" valueLink={this.linkState('query_string')}/>
            <img src="http://www.clker.com/cliparts/n/U/H/1/H/u/search-icon-white-one-hi.png"
                 onClick={this.searchGame}/>
          </form>
        </li>
    );
  }
});
