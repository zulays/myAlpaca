import React, { Component } from "react"
import "./Header.css"
import { Link } from "react-router-dom"

class Header extends Component {

  render() {

    return (

      <header className="header-signup" >
        <div className="ticker-tape">
          <p className="ticker-tape-text">Click Here to Learn More about COVID-19 Travel Advisories</p>
          <img src="https://res.cloudinary.com/zumariposa/image/upload/v1595437166/myalpaca/Close_button_ystvyf.png" alt="close banner" className="exit-banner" />
        </div>


        <div className="header-icon-bar">
          <div className="logo-set">
            <Link to="/"><img src="https://res.cloudinary.com/zumariposa/image/upload/v1595435995/myalpaca/AlpacaLogo_nq6xqd.png" alt="myalpaca-logo" className="myalpaca-logo" /></Link>
            <h1 className="logo-text">myAlpaca</h1>
          </div>

          <div className="userprofile-signup">
            <Link to="/login">  <img src="https://res.cloudinary.com/zumariposa/image/upload/v1595435995/myalpaca/PersonIcon_e3lchx.png" alt="profile-icon" className="nouser-profile-icon" />
              <br />
              <p className="nouser-side-text">Sign Up</p> </Link>
          </div>
        </div>

        <div className="header-nav-bar">
          <h3 className="nav-text">About</h3>
          <h3 className="nav-text">Reviews</h3>
          <h3 className="nav-text">Contact</h3>
          <h3 className="nav-text">FAQ</h3>
        </div>
      </header>
    )
  }
}
export default Header