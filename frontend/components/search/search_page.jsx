var React = require('react');
var SearchFieldStore = require('../../stores/search_field');
var SearchBar = require('./search_bar');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      searchResults: {total: 0}
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
      display = this.state.searchResults.item.map(function(item){
        return (
          <li info={item}>
            <h5>{item.name[0].value}</h5>
            published: {item.yearpublished[0].value}
          </li>
        );
      });
    }
    return (
      <div>
        <h1>Search</h1>
        <SearchBar/>
        <h4>generated {this.state.searchResults.total} items</h4>
        {display}
      </div>
    );
  }
});
