import React, { Component } from "react";
import "./UserCreate.css";
import { Redirect } from "react-router-dom";
import { createUser } from "../../services/users";

class UserCreate extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        username: "",
        email: "",
        password: "",
        confirm: "",
      },
      created: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createUser(this.state.user);
    this.setState({ created });
  };

  render() {
    const { user, created } = this.state;

    if (created) {
      return <Redirect to={`/users`} />;
    }
    return (
      <div>
        <p className="signup">Sign Up</p>
        <p className="register">
          <span>Register</span> so you can save and favorite any content
        </p>

        <div className="container">
          <form className="rectangle-20" onSubmit={this.handleSubmit}>
            <p className="username">Username *</p>
            <input
              className="rectangle-21"
              type="text"
              value={user.username}
              name="username"
              required
              autoFocus
              onChange={this.handleChange}
            />
            <p className="email"> Email Address *</p>
            <input
              className="rectangle-23"
              type="text"
              value={user.email}
              name="username"
              required
              autoFocus
              onChange={this.handleChange}
            />
            <p className="password">Password *</p>
            <input
              className="rectangle-24"
              type="text"
              value={user.password}
              name="username"
              required
              autoFocus
              onChange={this.handleChange}
            />
            <p className="confirm">Confirm Password *</p>
            <input
              className="rectangle-22"
              type="text"
              value={user.password}
              name="username"
              required
              autoFocus
              onChange={this.handleChange}
            />
            <p className="personal">
              Your personal data will be used to support your experience
              throughout using this website and to manage access to your
              account.Please see our <span>privacy policy</span> if you have any
              questions.
            </p>
            <input className="rectangle-14" type="submit" value="Register" />
          </form>
        </div>
      </div>
    );
  }
}

export default UserCreate;
