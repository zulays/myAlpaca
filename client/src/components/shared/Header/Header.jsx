import React, { Component } from "react"
import "./Header.css"
import { Link } from "react-router-dom"
// import { getUsers } from "../services/users";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
    };
  }

  // componentDidMount = async () => {
  //   const users = await getUsers();
  //   this.setState({
  //     user: users[users.length - 1],
  //   });
  // };




  render() {
    {/* if (user)    */ }

    return (

      <header className="header" >
        <div className="ticker-tape">
          <p className="ticker-tape-text">Click Here to Learn More about COVID-19 Travel Advisories</p>
          <p className="exit-banner">x</p>
        </div>

        <div className="header-icon-bar">
          <div className="logo-set">
            <img src="https://res.cloudinary.com/zumariposa/image/upload/v1595282898/alpaca-logo_igwnih.png" alt="myalpaca-logo" className="myalpaca-logo" />
            <h1 className="logo-text">myAlpaca</h1>
          </div>

          <div className="userprofile-signup">
            <Link to="/usercreate">  <img src="https://res.cloudinary.com/zumariposa/image/upload/v1595282898/profile-icon_jwxqyj.png" alt="profile-icon" className="nouser-profile-icon" /> <br /><p className="nouser-side-text">Sign Up</p> </Link>
          </div>
        </div>



        <div className="header-nav-bar">
          <h3>About</h3>
          <h3>Reviews</h3>
          <h3>Contact</h3>
          <h3>FAQ</h3>
        </div>

      </header>
    )
  }
}
export default Header