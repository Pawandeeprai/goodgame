var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ShelvesUtil = require('../../util/shelves');


module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      clicked: false,
      title: this.props.shelf.title,
      message: ""
    };
  },

  clicked: function(){
    this.setState({
      clicked: true
    });
  },

  updateShelf: function(e){
    e.preventDefault();
    if (this.state.title === ""){
      this.setState({message: "shelf title can't be blank"});
    } else {
      ShelvesUtil.editShelf({
        shelf_id: this.props.shelf.id,
        shelf: {title: this.state.title}
      });
      this.setState({
        clicked:false
      });
    }
  },

  render: function () {
    var that = this;
    if(this.state.clicked) {
      return(
        <div className="edit-shelf-title">
          {this.state.message}<br/>
        <form className="shelf-edit-form" onSubmit={this.updateShelf}>
          <input id="edit-rename" type="text"
            valueLink={this.linkState('title')}/>
          <input className="button" type="submit" value="rename shelf"/>
        </form>
        </div>
      );
    } else {
      return(
        <div>
          <li className="edit-shelf-title">
            {this.props.shelf.title}
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Edit_icon.svg"
              className="delete-icon edit-icon"
              onClick={that.clicked}/>
          </li>
        </div>
      );
    }
  }
});
