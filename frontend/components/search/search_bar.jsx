var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SearchUtil = require('../../util/search');


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
      <form onSubmit={this.searchGame}>
        <input type="text" valueLink={this.linkState('query_string')}/>
        <input type="submit" value="search"/>
      </form>
    );
  }
});
