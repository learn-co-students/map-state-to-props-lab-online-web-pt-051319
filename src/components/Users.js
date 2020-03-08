import React, { Component } from "react";
import { connect } from "react-redux";
// add any needed imports here
class Users extends Component {
  render() {
    function displayUser(username) {
      return <li>{username}</li>;
    }
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => displayUser(user.username))}
          {
            /* In addition, display the total number of users curently in the store */ this
              .props.userCount
          }
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here

const mapStateToProps = state => {
  return { users: state.users, userCount: state.users.length };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);
