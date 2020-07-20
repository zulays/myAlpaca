import React, { Component } from "react"
import "./UserEdit.css"
import Header from "../../components/shared/Header/Header"
import Footer from "../../components/shared/Footer/Footer"
import { Link, Redirect } from "react-router-dom";
import { updateUser } from "../../services/users";


class UserEdit extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        from_location: "",
        to_location: "",
        education: "",
        area_of_study: [],
        interests: [],
        hobbies: [],
        assistance: [],
        priorities: []
      },
      updated: false,
      color: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    })
  }

  // handleClick = (e) => {
  //   this.setState({
  //     user: {
  //       area_of_study: [],
  //       interests: [],
  //       hobbies: [],
  //       assistance: [],
  //       priorities: []
  //     }
  //   })
  // }

  handleSubmit = async (e) => {
    e.preventDefault()
    let id = this.props.user._id
    const updated = await updateUser(id, this.state.user)
    this.setState({
      updated: true
    })
  }

  handleSelect = (e) => {
    // if (color === "") {
    // borderColor: 3px solid #FFBE5C,
    // , fontColor: #025700 
    this.setState({
      // let style = {{ backgroundColor: #FBFCE6 }
      color: 
})
  }









  render() {

    const { user, updated } = this.state

    if (updated) {
      return
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
            <label className="from-label">I am coming from:</label><input type="text" name="from_location" onChange={this.handleChange} value={this.state.user.from_location} className="from-input" ></input>
            <label className="to-label">I am going to: </label><input type="text" name="to_location" onChange={this.handleChange} value={this.state.user.to_location} className="to-input"></input>
          </div>

          <label className="education">My Academic Instituion:</label> <input type="text" name="education" onChange={this.handleChange} value={this.state.user.education} className="education-input"></input>


          <p className="select-all">Select all that apply</p>

          <div className="edit-options">
            <div className="subjects-array">
              <h2 className="subjects-label" >Area of Study:</h2>
              <button className="art-button" onClick={this.handleSelect}>Art</button>
              <button className="science-button">Science</button>
              <button className="math-button">Math</button>
              <button className="lit-button">Literature</button>
              <button className="la-button">Liberal Arts</button>
              <button className="health-button">Healthcare</button>
            </div>


            <div className="interests-array">
              <h2 className="interests-label">My Interests:</h2>
              <button className="int-button">Politics</button>
              <button className="int-button">Space</button>
              <button className="int-button">Social Media</button>
              <button className="int-button">Music</button>
              <button className="int-button">Sports</button>
              <button className="int-button">Pop Culture</button>
            </div>

            <div className="hobbies-array">
              <h2 className="hobbies-label">My Hobbies:</h2>
              <button className="hob-button">Cooking</button>
              <button className="hob-button">Jogging</button>
              <button className="hob-button">Bar Hopping</button>
              <button className="hob-button">Dance</button>
              <button className="hob-button">Movies</button>
              <button className="hob-button">Hiking</button>
            </div>


            <div className="assistance-array">
              <h2 className="assistance-label">I could use some help with:</h2>
              <button className="ast-button">Language</button>
              <button className="ast-button">Housing</button>
              <button className="ast-button">Currency</button>
              <button className="ast-button">Visa</button>
              <button className="ast-button">Local Connections</button>
              <button className="ast-button">Maps</button>
            </div>

            <div className="priorities-array">
              <h2 className="priorities-label">My priorities are:</h2>
              <button className="pri-button">Academics</button>
              <button className="pri-button">Culture</button>
              <button className="pri-button">Shopping</button>
              <button className="pri-button">Sightseeing</button>
              <button className="pri-button">Spirituality</button>
              <button className="pri-button">Staying in Touch</button>
            </div>

          </div>

          <Link to="/userhome"><button className="doneProfile-button">Done</button> </Link>

        </main>


        < Footer />
      </>
    )
  }
}
export default UserEdit