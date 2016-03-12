var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SearchActions = require('../../actions/searches');
var SearchUtil = require('../../util/search');
var Link = require('react-router').Link;
var SearchStore = require('../../stores/search_field');



module.exports = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function(){
    return {
      query_string: "",
      searching: false
    };
  },

  componentDidMount: function(){
    this.Listener = SearchStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.Listener.remove();
  },

  _onChange: function(){
    this.setState({searching: false});
  },

  searchGame: function(e){
    e.preventDefault();
    if (this.state.query_string){
      SearchUtil.search({
        query_string: this.state.query_string
      });
      SearchActions.clearSearch();
      this.setState({searching: true});
    }
  },
  render: function () {
    var display;
    if (this.state.searching){
      display = <div className="loader">Loading...</div>;
    } else {
      display = "";
    }
    return (
      <form  onSubmit={this.searchGame}>
        <input className="searchbar"
               type="text"
               valueLink={this.linkState('query_string')}/>
        <input className="button" type="submit" value="search" />
        {display}
      </form>
    );
  }
});
