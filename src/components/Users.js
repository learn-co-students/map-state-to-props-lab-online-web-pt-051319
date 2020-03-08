import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);

    return (
      <div>
        {this.props.numberUsers} 
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          {users}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  };
};

export default connect(mapStateToProps )(Users);

//numberOfUsers just displays number of elements in the array, it can be called anything, except the name of the array