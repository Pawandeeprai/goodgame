var React = require('react');
var Link = require('react-router').Link;
var SessionsStore = require('../../stores/sessions');
var Logout = require('../sessions/logout');
var Shelves = require('../shelves/shelves');
var FavoriteGames = require('../games/favorite_games');



var CurrentUser = React.createClass({
  getInitialState: function(){
    return {user: SessionsStore.all()};
  },

  getStateFromStore: function () {
    return { user: SessionsStore.all() };
  },

  _onChange: function(){
    this.setState(this.getStateFromStore());
  },

  componentDidMount: function () {
    this.Listener = SessionsStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    // remove Listener
    this.Listener.remove();
  },

  memberSince: function(){
    var year =  this.state.user.created_at.slice(0,4);
    var mm = this.state.user.created_at.slice(5,7);
    var dd = this.state.user.created_at.slice(8,10);
    var today = dd + "/" + mm + "/" + year;
    return today;
  },
  dateToday: function(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd < 10){
        dd ='0'+dd;
    }
    if (mm < 10){
        mm ='0'+mm;
    }
      today = dd+'/'+mm+'/'+yyyy;
      return today;
  },

  render: function(){
    return (
      <div>
        <div className="current-user-div">
          <div className="current-user-img-div">
            <img className="current-user-img"
                 src={this.state.user.picture_url}/>
           <Link to="users/edit">
             (edit profile)
           </Link>
          </div>
          <div className="current-user-name">
            <h3>{this.state.user.name}
              <Link className="user-edit-link" to="users/edit">
                (edit profile)
              </Link>
            </h3>
            <br/>
            <h4 id="top-info" className="member-info" >
              <label className="">
                Member Since:
              </label>
              {this.memberSince()}
            </h4>
            <h4 className="member-info" >
              <label className="">
                Last Login:
              </label>
              {this.dateToday()}
            </h4>
            <h4 className="member-info" >
              <label className="">
                Reviews:
              </label>
              {this.state.user.reviews.length}
            </h4>
          </div >
        </div>
        <FavoriteGames/>
        <Shelves/>
      </div>
    );
  }
});

module.exports = CurrentUser;
