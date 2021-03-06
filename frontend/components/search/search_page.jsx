var React = require('react');
var SearchFieldStore = require('../../stores/search_field');
var SearchBar = require('./search_bar');
var SearchUtil = require('../../util/search');
var SearchItem = require('./search_item');


module.exports = React.createClass({
  getInitialState: function(){
    return {
      searchResults: SearchFieldStore.all()
    };
  },
  componentDidMount: function(){
    this.Listener = SearchFieldStore.addListener(this._onChange);
  },

  _onChange: function(){
    this.setState({
      searchResults: SearchFieldStore.all()
    });
  },
  componentWillUnmount: function(){
    this.Listener.remove();
  },


  render: function () {
    var display;
    if (this.state.searchResults.item){
      display = this.state.searchResults.item.map(function(item, idx){
        return (
          <SearchItem key={idx} info={item}/>
        );
      });
    }
    var generated;
    if (this.state.searchResults.total > 0){
      generated = <h4>generated {this.state.searchResults.total} items</h4>;
    }
    return (
      <div className="search-results">
        <h1>Search</h1>
        <SearchBar/>
        {generated}
        {display}
      </div>
    );
  }
});
