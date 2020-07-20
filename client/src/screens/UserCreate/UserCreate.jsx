import React, { Component } from "react";
import "./UserCreate.css";
import { Redirect } from "react-router-dom";
import { createUser } from "../../services/users";
import Header from "../../components/shared/Header/Header";
import Footer from "../../components/shared/Footer/Footer";

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
    if (this.state.user.password === this.state.user.confirm) {
      const created = await createUser(this.state.user);
      this.setState({ created });
    }
  };

  render() {
    const { user, created } = this.state;

    if (created) {
      return <Redirect to={`/useredit`} />;
    }
    return (
      <>
        <Header />
        <div className="usercreate-container">
          <p className="usercreate-signup">Sign Up</p>
          <p className="usercreate-sentence">
            <span className="usercreate-span">Register</span> so you can save
            and favorite any content
          </p>

          <form className="usercreate-form" onSubmit={this.handleSubmit}>
            <p className="username">Username *</p>
            <input
              className="usercreate-rectangle-21"
              type="text"
              value={user.username}
              name="username"
              required
              autoFocus
              onChange={this.handleChange}
            />
            <p className="usercreate-email"> Email Address *</p>
            <input
              className="usercreate-rectangle-23"
              type="text"
              value={user.email}
              name="email"
              required
              autoFocus
              onChange={this.handleChange}
            />
            <p className="usercreate-password">Password *</p>
            <input
              className="usercreate-rectangle-24"
              type="password"
              value={user.password}
              name="password"
              required
              autoFocus
              onChange={this.handleChange}
            />
            <p className="usercreate-confirm">Confirm Password *</p>
            <input
              className="usercreate-rectangle-22"
              type="password"
              value={user.confirm}
              name="confirm"
              required
              autoFocus
              onChange={this.handleChange}
            />
            <p className="usercreate-personal">
              Your personal data will be used to support your experience
              throughout using this website and to manage access to your
              account.Please see our <span>privacy policy</span> if you have any
              questions.
            </p>
            <input
              className="usercreate-rectangle-14"
              type="submit"
              value="Register"
            />
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default UserCreate;
