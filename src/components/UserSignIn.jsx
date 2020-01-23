import React, { Component } from "react";
import * as api from "../API";

class UserSignIn extends Component {
  state = {
    users: []
  };

  fetchUsers = () => {
    api.getUsers().then(users => {
      this.setState({ users: users });
    });
  };

  handleSubmit = event => {
    const { value } = event.target;
    const { changeUser } = this.props;
    changeUser(value);
  };

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { users } = this.state;
    const { signedInUser } = this.props;
    return (
      <div className="UserSignIn">
        <p>Current User: {signedInUser}</p>
        <form onChange={this.handleSubmit}>
          <select className="signInDropList">
            {users.map(user => {
              return <option key={user.username}>{user.username}</option>;
            })}
          </select>
        </form>
      </div>
    );
  }
}

export default UserSignIn;
