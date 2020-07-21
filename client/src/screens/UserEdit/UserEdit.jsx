import React, { Component } from "react";
import "./UserEdit.css";
import Header from "../../components/shared/Header/Header";
import Footer from "../../components/shared/Footer/Footer";
// import { Redirect } from "react-router-dom";
import { updateUser } from "../../services/users";
class UserEdit extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        from_location: "",
        to_location: "",
        education: "",
        area_of_study: {
          art: false,
          science: false,
          //initialize all values as false first
        },
        interests: {},
        hobbies: {},
        assistance: {},
        priorities: {},
        //Object.entries with allow use of array to match schema, brings in key, value pair and allows use of access to it
        //consider how data with go to BE -- convert values into an
        //consider how data will be entered in FE
        //how to link the 2 together
      },
      updated: false,
      button: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let id = this.props.user._id;
    const updated = await updateUser(id, this.state.user);
    this.setState({
      updated: true,
    });
  };

  handleSelect = (e) => {
    const { name } = e.target;
    console.log(e.target.dataset.category);
    const { category } = e.target.dataset;
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [category]: {
          ...prevState.user[category],
          [name]: !prevState.user[category][name],
        },
      },
    }));
  };

  render() {
    const { user, updated } = this.state;

    if (updated) {
      return;
      // <Redirect to={"/userhome"} />
    }
    return (
      <>
        <Header />
        <main className="editPage-main">
          <div className="edit-title">
            <h2>Tell us more about you...</h2>
            <p>You can always come back and add more!</p>
          </div>
          <div className="to-from-location">
            <label className="from-label">I am coming from:</label>
            <input
              type="text"
              name="from_location"
              onChange={this.handleChange}
              value={this.state.user.from_location}
              className="from-input"
            ></input>
            {/* data- stores info */}
            <label className="to-label">I am going to: </label>
            <input
              type="text"
              name="to_location"
              onChange={this.handleChange}
              value={this.state.user.to_location}
              className="to-input"
            ></input>
          </div>
          <label className="education">My Academic Instituion:</label>{" "}
          <input
            type="text"
            name="education"
            onChange={this.handleChange}
            value={this.state.user.education}
            className="education-input"
          ></input>
          <p className="select-all">Select all that apply</p>
          <div className="edit-options">
            <div className="subjects-array">
              <h2 className="subjects-label">Area of Study:</h2>

              <button
                className={
                  this.state.user.area_of_study.art
                    ? "buttonTrue"
                    : "art-button"
                }
                name="art"
                value={this.state.user.area_of_study.art}
                data-category="area_of_study"
                onClick={this.handleSelect}
              >
                Art
              </button>
              <button
                className={
                  this.state.user.area_of_study.science
                    ? "buttonTrue"
                    : "science-button"
                }
                name="science"
                value={this.state.user.area_of_study.science}
                data-category="area_of_study"
                onClick={this.handleSelect}
              >
                Science
              </button>
              <button
                className={
                  this.state.user.area_of_study.math
                    ? "buttonTrue"
                    : "math-button"
                }
                name="math"
                value={this.state.user.area_of_study.math}
                data-category="area_of_study"
                onClick={this.handleSelect}
              >
                Math
              </button>

              <button
                className={
                  this.state.user.area_of_study.literature
                    ? "buttonTrue"
                    : "literature-button"
                }
                name="literature"
                value={this.state.user.area_of_study.literature}
                data-category="area_of_study"
                onClick={this.handleSelect}
              >
                Literature
              </button>

              <button
                className={
                  this.state.user.area_of_study.liberal_arts
                    ? "buttonTrue"
                    : "liberal_arts-button"
                }
                name="liberal_arts"
                value={this.state.user.area_of_study.liberal_arts}
                data-category="area_of_study"
                onClick={this.handleSelect}
              >
                Liberal Arts
              </button>
              <button
                className={
                  this.state.user.area_of_study.health
                    ? "buttonTrue"
                    : "health-button"
                }
                name="health"
                value={this.state.user.area_of_study.health}
                data-category="area_of_study"
                onClick={this.handleSelect}
              >
                Healthcare
              </button>
            </div>

            <div className="interests-array">
              <h2 className="interests-label">My Interests:</h2>
              <button
                className={this.state.button ? "buttonTrue" : "int-button"}
                onClick={this.handleSelect}
              >
                Politics
              </button>
              <button className="int-button">Space</button>
              <button className="int-button">Social Media</button>
              <button className="int-button">Music</button>
              <button className="int-button">Sports</button>
              <button className="int-button">Pop Culture</button>
            </div>

            <div className="hobbies-array">
              <h2 className="hobbies-label">My Hobbies:</h2>
              <button
                className={this.state.button ? "buttonTrue" : "hob-button"}
                onClick={this.handleSelect}
              >
                Cooking
              </button>
              <button className="hob-button">Jogging</button>
              <button className="hob-button">Bar Hopping</button>
              <button className="hob-button">Dance</button>
              <button className="hob-button">Movies</button>
              <button className="hob-button">Hiking</button>
            </div>

            <div className="assistance-array">
              <h2 className="assistance-label">I could use some help with:</h2>
              <button
                className={this.state.button ? "buttonTrue" : "ast-button"}
                onClick={this.handleSelect}
              >
                Language
              </button>
              <button className="ast-button">Housing</button>
              <button className="ast-button">Currency</button>
              <button
                className={
                  this.state.user.assistance.visa ? "buttonTrue" : "visa"
                }
                name="visa"
                value={this.state.user.assistance.visa}
                data-category="assistance"
                onclick={this.handleSelect}
              >
                Visa
              </button>
              <button
                className={
                  this.state.user.assistance.local_connections
                    ? "buttonTrue"
                    : "local_connections-button"
                }
                name="local_connections"
                value={this.state.user.assistance.local_connections}
                data-category="assistance"
                onClick={this.handleSelect}
              >
                Local Connections
              </button>

              <button
                className={
                  this.state.user.assistance.maps ? "buttonTrue" : "maps-button"
                }
                name="maps"
                value={this.state.user.assistance.maps}
                data-category="assistance"
                onClick={this.handleSelect}
              >
                Maps
              </button>
            </div>

            <div className="priorities-array">
              <h2 className="priorities-label">My priorities are:</h2>
              <button
                className={
                  this.state.user.priorities.academics
                    ? "buttonTrue"
                    : "academics-button"
                }
                name="academics"
                value={this.state.user.priorities.academics}
                data-category="priorities"
                onClick={this.handleSelect}
              >
                Academics
              </button>
              <button
                className={
                  this.state.user.priorities.culture
                    ? "buttonTrue"
                    : "culture-button"
                }
                name="culture"
                value={this.state.user.priorities.culture}
                data-category="priorities"
                onClick={this.handleSelect}
              >
                Culture
              </button>
              <button
                className={
                  this.state.user.priorities.shopping
                    ? "buttonTrue"
                    : "shopping-button"
                }
                name="shopping"
                value={this.state.user.priorities.shopping}
                data-category="priorities"
                onClick={this.handleSelect}
              >
                Shopping
              </button>

              <button
                className={
                  this.state.user.priorities.sightseeging
                    ? "buttonTrue"
                    : "sightseeing-button"
                }
                name="sightseeing"
                value={this.state.user.priorities.sightseeging}
                data-category="priorities"
                onClick={this.handleSelect}
              >
                Sightseeing
              </button>
              <button
                className={
                  this.state.user.priorities.spirituality
                    ? "buttonTrue"
                    : "spirituality-button"
                }
                name="spirituality"
                value={this.state.user.priorities.spirituality}
                data-category="priorities"
                onClick={this.handleSelect}
              >
                Spirituality
              </button>
              <button
                className={
                  this.state.user.priorities.staying_in_touch
                    ? "buttonTrue"
                    : "staying_in_touch-button"
                }
                name="staying_in_touch"
                value={this.state.user.priorities.staying_in_touch}
                data-category="priorities"
                onClick={this.handleSelect}
              >
                Staying in Touch
              </button>
            </div>
          </div>
          <button className="doneProfile-button" onClick={this.handleSubmit}>
            Done
          </button>
        </main>

        <Footer />
      </>
    );
  }
}
export default UserEdit;
