import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    const users = this.props.users.map((user, i) => (
      <li key={i}> {user.username} </li>
    ));
    return (
      <div>
        <h3>{this.props.userCount}</h3>
        <ul>{users}</ul>
      </div>
    );
  }
}

//add mapStateToProps here

const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
  };
};

export default connect(mapStateToProps)(Users);
