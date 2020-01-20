import React, { Component } from "react";
import * as api from "../API";

class UserSignIn extends Component {
  state = {
    users: []
  };

  fetchUsers = () => {
    api.getUsers().then(users => {
      console.log(users);
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
        <form onChange={this.handleSubmit} className="UserSignInForm">
          <select>
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
