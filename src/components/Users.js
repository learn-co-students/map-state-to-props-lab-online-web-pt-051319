import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, i) => <li key={i}>{user.username} is from {user.hometown}</li>)}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return { users: state.users }
// }

export default connect((state) => state)(Users);
