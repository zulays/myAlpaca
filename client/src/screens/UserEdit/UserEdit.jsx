import React, { Component } from "react";
import "./UserEdit.css";
import Header from "../../components/shared/Header/Header";
import Footer from "../../components/shared/Footer/Footer";
// import { updateUser } from "../../services/users";
// import { Link } from "react-router-dom";

class UserEdit extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        from_location: "",
        to_location: "",
        education: "",
        area_of_study: [],
        interests: [],
        hobbies: [],
        assistance: [],
        priorities: [],
      },
    };
  }

  handleChange = (e) => {
    // const { name, value } = e.target
    this.setState({
      user: {
        from_location: e.target.value,
        to_location: e.target.value,
        education: e.target.value,
      },
    });
  };

  handleClick = (e) => {
    this.setState({
      user: {
        area_of_study: [],
        interests: [],
        hobbies: [],
        assistance: [],
        priorities: [],
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const created
  };

  componentDidMount = async () => {};

  render() {
    return (
      <>
        <Header />
        <main className="editPage-main">
          <div className="edit-title">
            <h2>Tell us more about you...</h2>
            <h4>You can always come back and add more!</h4>
          </div>
          <div className="to-from-location">
            <label className="from-label">I am coming from:</label>
            <input
              type="text"
              name="from_location"
              onChange={this.handleChange}
              value={user.from_location}
              className="from-input"
            ></input>
            <label className="to-label">I am going to: </label>
            <input
              type="text"
              name="to_location"
              onChange={this.handleChange}
              value={user.to_location}
              className="to-input"
            ></input>
          </div>
          <label className="education">My Academic Instituion:</label>{" "}
          <input
            type="text"
            name="education"
            onChange={this.handleChange}
            value={user.education}
            className="education-input"
          ></input>
          <p>Select all that apply</p>
          <div className="edit-options">
            <div className="subjects-array">
              <h2 className="subject-label">Area of Study:</h2>
            </div>
            <div className="interests-array">
              <h2 className="interests-label">My Interests:</h2>
            </div>
            <div className="hobbies-array">
              <h2 className="hobbies-label">My Hobbies:</h2>
            </div>
            <div className="assistance-array">
              <h2 className="assistance-label">I could use some help with:</h2>
            </div>
            <div className="priorities-array">
              <h2 className="priorities-label">My priorities are:</h2>
            </div>
          </div>
          <button className="doneProfile-button">Done</button>
        </main>

        <Footer />
      </>
    );
  }
}
export default UserEdit;
