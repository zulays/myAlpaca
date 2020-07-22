import React, { Component } from "react";
import "./UserCreate.css";
import { Redirect } from "react-router-dom";
import { createUser } from "../../services/users";
import Header from "../../components/shared/Header/Header";
import Footer from "../../components/shared/Footer/Footer";

class UserCreate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      username,
      password,
      email,
      confirm,
      created,
      handleChange,
      handleSubmit,
    } = this.props;
    if (created) {
      console.log(created);
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

          <form className="usercreate-form" onSubmit={handleSubmit}>
            <p className="usercreate-username">Username *</p>
            <input
              className="usercreate-rectangle-21"
              type="text"
              value={username}
              name="username"
              required
              autoFocus
              onChange={handleChange}
            />
            <p className="usercreate-email"> Email Address *</p>
            <input
              className="usercreate-rectangle-23"
              type="text"
              value={email}
              name="email"
              required
              autoFocus
              onChange={handleChange}
            />
            <p className="usercreate-password">Password *</p>
            <input
              className="usercreate-rectangle-24"
              type="password"
              value={password}
              name="password"
              required
              autoFocus
              onChange={handleChange}
            />
            <p className="usercreate-confirm">Confirm Password *</p>
            <input
              className="usercreate-rectangle-22"
              type="password"
              value={confirm}
              name="confirm"
              required
              autoFocus
              onChange={handleChange}
            />
            <p className="usercreate-personal">
              Your personal data will be used to support your experience
              throughout using this website and to manage access to your
              account.Please see our{" "}
              <span className="usercreate-privacy">privacy policy</span> if you
              have any questions.
            </p>
            <div className="usercreate-register-container">
              <input
                className="usercreate-rectangle-14"
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default UserCreate;
