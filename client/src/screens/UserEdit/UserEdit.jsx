import React, { Component } from "react";
import "./UserEdit.css";
import Header from "../../components/shared/Header/Header";
import Footer from "../../components/shared/Footer/Footer";


class UserEdit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      user,
      updated,
      handleChange,
      handleSelect,
      handleEdit,
    } = this.props;


    return (
      <>
        <Header />
        <main className="editPage-main">
          <div className="edit-title">
            <h2>Tell us more about you...</h2>
            <p>You can always come back and add more!</p>
          </div>

          <div className="input-options">
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
            <div className="education">
              <label className="edu-label">My Academic Instituion:</label>{" "}
              <input
                type="text"
                name="education"
                onChange={handleChange}
                value={user.education}
                className="education-input"
              ></input>
            </div>
            <p className="select-all">Select all that apply</p>
          </div>



          <div className="edit-options">
            <h2 className="subjects-label">Area of Study:</h2>
            <div className="subjects-array">
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
