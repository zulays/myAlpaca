import React, { Component } from "react";
import "./UserEdit.css";
import Header from "../../components/shared/Header/Header";
import Footer from "../../components/shared/Footer/Footer";
import { Redirect } from "react-router-dom";
import { getUser, updateUser } from "../../services/users";

// grab local state inside the component. keep state higher up. that's why we put usercreate/useredit in app.js. move the state of usereidt up

class UserEdit extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   user: {
    //     from_location: "",
    //     to_location: "",
    //     education: "",
    //     area_of_study: {
    //       art: false,
    //       science: false,
    //       math: false,
    //       literature: false,
    //       liberal_arts: false,
    //       healthcare: false,
    //     },
    //     interests: {
    //       politics: false,
    //       space: false,
    //       social_media: false,
    //       music: false,
    //       sports: false,
    //       pop_culture: false,
    //     },
    //     hobbies: {
    //       cooking: false,
    //       jogging: false,
    //       bar_hopping: false,
    //       dance: false,
    //       movies: false,
    //       hiking: false,
    //     },
    //     assistance: {
    //       language: false,
    //       housing: false,
    //       currency: false,
    //       visa: false,
    //       local_connections: false,
    //       maps: false,
    //     },
    //     priorities: {
    //       academics: false,
    //       culture: false,
    //       shopping: false,
    //       sightseeing: false,
    //       spiritually: false,
    //       staying_in_touch: false,
    //     },
    //     //initialize all values as false first
    //     //Object.entries with allow use of array to match schema, brings in key, value pair and allows use of access to it
    //     //consider how data with go to BE -- convert values into an
    //     //consider how data will be entered in FE
    //     //how to link the 2 together
    //   },
    //   updated: false,
    //   button: false,
    // };
  }

  // handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     user: {
  //       ...this.state.user,
  //       [name]: value,
  //     },
  //   });
  // };

  // handleEdit = async (e) => {
  //   e.preventDefault();
  //   let id = this.props.user._id;
  //   console.log(this.props.user);
  //   const updated = await updateUser(id, this.state.user);
  //   this.setState({
  //     updated: true,
  //   });
  // };

  // handleSelect = (e) => {
  //   const { name } = e.target;
  //   console.log(e.target.dataset);
  //   const { category } = e.target.dataset;
  //   this.setState((prevState) => ({
  //     user: {
  //       ...prevState.user,
  //       [category]: {
  //         ...prevState.user[category],
  //         [name]: !prevState.user[category][name],
  //       },
  //     },
  //   }));
  // };

  // componentDidMount = async () => {
  //   //update current user with existing parameters
  //   //update state from existing changes
  //   // const userEdit = this.props.user._id
  //   // const user = await getUser(userEdit)
  //   const { user } = this.props;
  //   // console.log(user)

  // if (user.area_of_study) {
  //   this.setState({
  //     user: {
  //       from_location: user.from_location,
  //       to_location: user.to_location,
  //       education: user.education,
  //       area_of_study: {
  //         art: user.area_of_study.art,
  //         science: user.area_of_study.science,
  //         math: user.area_of_study.math,
  //         literature: user.area_of_study.literature,
  //         liberal_arts: user.area_of_study.liberal_arts,
  //         healthcare: user.area_of_study.healthcare,
  //       },
  //       interests: {
  //         politics: user.interests.politics,
  //         space: user.interests.space,
  //         social_media: user.interests.social_media,
  //         music: user.interests.music,
  //         sports: user.interests.sports,
  //         pop_culture: user.interests.pop_culture,
  //       },
  //       hobbies: {
  //         cooking: user.hobbies.cooking,
  //         jogging: user.hobbies.jogging,
  //         bar_hopping: user.hobbies.bar_hopping,
  //         dance: user.hobbies.dance,
  //         movies: user.hobbies.movies,
  //         hiking: user.hobbies.hiking,
  //       },
  //       assistance: {
  //         language: user.assistance.language,
  //         housing: user.assistance.housing,
  //         currency: user.assistance.currency,
  //         visa: user.assistance.visa,
  //         local_connections: user.assistance.local_connections,
  //         maps: user.assistance.maps,
  //       },
  //       priorities: {
  //         academics: user.priorities.academics,
  //         culture: user.priorities.culture,
  //         shopping: user.priorities.shopping,
  //         sightseeing: user.priorities.sightseeing,
  //         spiritually: user.priorities.spiritually,
  //         staying_in_touch: user.priorities.staying_in_touch,
  //       },
  //     },

  //       updated: false,
  //     });
  //   }
  // };

  render() {
    const {
      user,
      updated,
      handleChange,
      handleSelect,
      handleEdit,
    } = this.props;
    if (updated) {
      // return <Redirect to={`/userhome`} />;
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
              onChange={handleChange}
              value={user.from_location}
              className="from-input"
            ></input>
            <label className="to-label">I am going to: </label>
            <input
              type="text"
              name="to_location"
              onChange={handleChange}
              value={user.to_location}
              className="to-input"
            ></input>
          </div>
          <label className="education">My Academic Instituion:</label>{" "}
          <input
            type="text"
            name="education"
            onChange={handleChange}
            value={user.education}
            className="education-input"
          ></input>
          <p className="select-all">Select all that apply</p>
        
          <div className="edit-options">
            <h2 className="subjects-label">Area of Study:</h2>
            <div className="subjects-array">
              <h2 className="subjects-label">Area of Study:</h2>
              <button
                className={user.area_of_study.art ? "buttonTrue" : "art-button"}
                name="art"
                value={user.area_of_study.art}
                data-category="area_of_study"
                onClick={handleSelect}
              >
                Art
              </button>
              <button
                className={
                  user.area_of_study.science ? "buttonTrue" : "science-button"
                }
                name="science"
                value={user.area_of_study.science}
                data-category="area_of_study"
                onClick={handleSelect}
              >
                Science
              </button>
              <button
                className={
                  user.area_of_study.math ? "buttonTrue" : "math-button"
                }
                name="math"
                value={user.area_of_study.math}
                data-category="area_of_study"
                onClick={handleSelect}
              >
                Math
              </button>
              <button
                className={
                  user.area_of_study.literature ? "buttonTrue" : "lit-button"
                }
                name="literature"
                value={user.area_of_study.literature}
                data-category="area_of_study"
                onClick={handleSelect}
              >
                Literature
              </button>
              <button
                className={
                  user.area_of_study.liberal_arts ? "buttonTrue" : "la-button"
                }
                name="liberal_arts"
                value={user.area_of_study.liberal_arts}
                data-category="area_of_study"
                onClick={handleSelect}
              >
                Liberal Arts
              </button>
              <button
                className={
                  user.area_of_study.health ? "buttonTrue" : "health-button"
                }
                name="health"
                value={user.area_of_study.health}
                data-category="area_of_study"
                onClick={handleSelect}
              >
                Healthcare{" "}
              </button>
            </div>

            <h2 className="interests-label">My Interests:</h2>
            <div className="interests-array">
              <h2 className="interests-label">My Interests:</h2>
              <button
                className={
                  user.interests.politics ? "buttonTrue" : "poli-button"
                }
                data-category="interests"
                onClick={handleSelect}
                name="politics"
              >
                Politics
              </button>
              <button
                className={user.interests.space ? "buttonTrue" : "space-button"}
                data-category="interests"
                onClick={handleSelect}
                name="space"
              >
                Space
              </button>
              <button
                className={
                  user.interests.social_media ? "buttonTrue" : "socmed-button"
                }
                data-category="interests"
                onClick={handleSelect}
                name="social_media"
              >
                Social Media
              </button>
              <button
                className={user.interests.music ? "buttonTrue" : "music-button"}
                data-category="interests"
                onClick={handleSelect}
                name="music"
              >
                Music
              </button>
              <button
                className={
                  user.interests.sports ? "buttonTrue" : "sports-button"
                }
                data-category="interests"
                onClick={handleSelect}
                name="sports"
              >
                Sports
              </button>
              <button
                className={
                  user.interests.pop_culture ? "buttonTrue" : "popcul-button"
                }
                data-category="interests"
                onClick={handleSelect}
                name="pop_culture"
              >
                Pop Culture
              </button>
            </div>

            <h2 className="hobbies-label">My Hobbies:</h2>
            <div className="hobbies-array">
              <h2 className="hobbies-label">My Hobbies:</h2>
              <button
                className={user.hobbies.cooking ? "buttonTrue" : "cook-button"}
                name="cooking"
                data-category="hobbies"
                onClick={handleSelect}
              >
                Cooking
              </button>
              <button
                className={user.hobbies.jogging ? "buttonTrue" : "jog-button"}
                name="jogging"
                data-category="hobbies"
                onClick={handleSelect}
              >
                Jogging
              </button>
              <button
                className={
                  user.hobbies.bar_hopping ? "buttonTrue" : "barhop-button"
                }
                name="bar_hopping"
                data-category="hobbies"
                onClick={handleSelect}
              >
                Bar Hopping
              </button>
              <button
                className={user.hobbies.dance ? "buttonTrue" : "dance-button"}
                name="dance"
                data-category="hobbies"
                onClick={handleSelect}
              >
                Dance
              </button>
              <button
                className={user.hobbies.movies ? "buttonTrue" : "mov-button"}
                name="movies"
                data-category="hobbies"
                onClick={handleSelect}
              >
                Movies
              </button>
              <button
                className={user.hobbies.hiking ? "buttonTrue" : "hike-button"}
                name="hiking"
                data-category="hobbies"
                onClick={handleSelect}
              >
                Hiking
              </button>
            </div>

            <h2 className="assistance-label">I could use some help with:</h2>
            <div className="assistance-array">
              <h2 className="assistance-label">I could use some help with:</h2>
              <button
                className={
                  user.assistance.language ? "buttonTrue" : "lang-button"
                }
                name="language"
                data-category="assistance"
                onClick={handleSelect}
              >
                Language
              </button>
              <button
                className={
                  user.assistance.housing ? "buttonTrue" : "house-button"
                }
                name="housing"
                data-category="assistance"
                onClick={handleSelect}
              >
                Housing
              </button>
              <button
                className={
                  user.assistance.currency ? "buttonTrue" : "curr-button"
                }
                name="currency"
                data-category="assistance"
                onClick={handleSelect}
              >
                {" "}
                Currency
              </button>
              <button
                className={user.assistance.visa ? "buttonTrue" : "visa-button"}
                name="visa"
                value={user.assistance.visa}
                data-category="assistance"
                onClick={handleSelect}
              >
                Visa
              </button>
              <button
                className={
                  user.assistance.local_connections
                    ? "buttonTrue"
                    : "localcon-button"
                }
                name="local_connections"
                value={user.assistance.local_connections}
                data-category="assistance"
                onClick={handleSelect}
              >
                Local Connections{" "}
              </button>
              <button
                className={user.assistance.maps ? "buttonTrue" : "maps-button"}
                name="maps"
                value={user.assistance.maps}
                data-category="assistance"
                onClick={handleSelect}
              >
                Maps
              </button>
            </div>

            <h2 className="priorities-label">My priorities are:</h2>
            <div className="priorities-array">
              <h2 className="priorities-label">My priorities are:</h2>
              <button
                className={
                  user.priorities.academics ? "buttonTrue" : "acad-button"
                }
                name="academics"
                value={user.priorities.academics}
                data-category="priorities"
                onClick={handleSelect}
              >
                Academics
              </button>
              <button
                className={
                  user.priorities.culture ? "buttonTrue" : "cul-button"
                }
                name="culture"
                value={user.priorities.culture}
                data-category="priorities"
                onClick={handleSelect}
              >
                {" "}
                Culture{" "}
              </button>
              <button
                className={
                  user.priorities.shopping ? "buttonTrue" : "shop-button"
                }
                name="shopping"
                value={user.priorities.shopping}
                data-category="priorities"
                onClick={handleSelect}
              >
                {" "}
                Shopping{" "}
              </button>
              <button
                className={
                  user.priorities.sightseeing ? "buttonTrue" : "sightsee-button"
                }
                name="sightseeing"
                value={user.priorities.sightseeing}
                data-category="priorities"
                onClick={handleSelect}
              >
                Sightseeing
              </button>
              <button
                className={
                  user.priorities.spirituality ? "buttonTrue" : "spirit-button"
                }
                name="spirituality"
                value={user.priorities.spirituality}
                data-category="priorities"
                onClick={handleSelect}
              >
                {" "}
                Spirituality{" "}
              </button>
              <button
                className={
                  user.priorities.staying_in_touch
                    ? "buttonTrue"
                    : "staytouch-button"
                }
                name="staying_in_touch"
                value={user.priorities.staying_in_touch}
                data-category="priorities"
                onClick={handleSelect}
              >
                {" "}
                Staying in Touch{" "}
              </button>
            </div>
          </div>
          <button className="doneProfile-button" onClick={handleEdit}>
            Done
          </button>
        </main>

        <Footer />
      </>
    );
  }
}
export default UserEdit;
