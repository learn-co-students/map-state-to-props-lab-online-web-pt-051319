import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    function displayUser(username){
      return ( <li>{username}</li>)
    }
    
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */
            this.props.users.map(user => displayUser(user.username))
          }
          <br />
          {/* In addition, display the total number of users curently in the store */
            this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users,
  userCount: state.users.length }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
