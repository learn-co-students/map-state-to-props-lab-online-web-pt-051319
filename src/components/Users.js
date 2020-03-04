import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    const users = this.props.users.map((user, i) => (
      <li key={i}> {user.username} </li>
    ));
    return (
      <div>
        <ul>
          Users!
          {this.props.userCount}
          {users}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
  };
};

export default connect(mapStateToProps)(Users);
