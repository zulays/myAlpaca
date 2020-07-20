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
<<<<<<< HEAD
        <div className="container">
          <p className="signup">Sign Up</p>
          <p>
            <span className="register">Register</span> so you can save and
            favorite any content
          </p>

          <form onSubmit={this.handleSubmit}>
            <p className="username">Username *</p>
            <input
              className="rectangle-21"
=======
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
>>>>>>> c7856fc52dbdf79689330a0abaab06fe45b6f4da
              type="text"
              value={user.username}
              name="username"
              required
              autoFocus
              onChange={this.handleChange}
            />
<<<<<<< HEAD
            <p className="email"> Email Address *</p>
            <input
              className="rectangle-23"
=======
            <p className="usercreate-email"> Email Address *</p>
            <input
              className="usercreate-rectangle-23"
>>>>>>> c7856fc52dbdf79689330a0abaab06fe45b6f4da
              type="text"
              value={user.email}
              name="email"
              required
              autoFocus
              onChange={this.handleChange}
            />
<<<<<<< HEAD
            <p className="password">Password *</p>
            <input
              className="rectangle-24"
=======
            <p className="usercreate-password">Password *</p>
            <input
              className="usercreate-rectangle-24"
>>>>>>> c7856fc52dbdf79689330a0abaab06fe45b6f4da
              type="password"
              value={user.password}
              name="password"
              required
              autoFocus
              onChange={this.handleChange}
            />
<<<<<<< HEAD
            <p className="confirm">Confirm Password *</p>
            <input
              className="rectangle-22"
=======
            <p className="usercreate-confirm">Confirm Password *</p>
            <input
              className="usercreate-rectangle-22"
>>>>>>> c7856fc52dbdf79689330a0abaab06fe45b6f4da
              type="password"
              value={user.confirm}
              name="confirm"
              required
              autoFocus
              onChange={this.handleChange}
            />
<<<<<<< HEAD
            <p className="personal">
=======
            <p className="usercreate-personal">
>>>>>>> c7856fc52dbdf79689330a0abaab06fe45b6f4da
              Your personal data will be used to support your experience
              throughout using this website and to manage access to your
              account.Please see our <span>privacy policy</span> if you have any
              questions.
            </p>
<<<<<<< HEAD
            <input className="rectangle-14" type="submit" value="Register" />
          </form>
        </div>
=======
            <input
              className="usercreate-rectangle-14"
              type="submit"
              value="Register"
            />
          </form>
        </div>
        <Footer />
>>>>>>> c7856fc52dbdf79689330a0abaab06fe45b6f4da
      </>
    );
  }
}

export default UserCreate;
