import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {

  return (

    <header>

      <div className="ticker-tape">
        <p className="ticker-tape-text">Click Here to Learn More about COVID-19 Travel Advisories</p>
        <p className="exit-banner">x</p>
      </div>

      <div className="header-icon-bar">
        <div className="logo-set">
          <img src="https://res.cloudinary.com/zumariposa/image/upload/v1595282898/alpaca-logo_igwnih.png" alt="myalpaca-logo" className="myalpaca-logo" />
          <h1 className="logo-text">myAlpaca</h1>
        </div>
        <Link to="/usercreate">  <img src="https://res.cloudinary.com/zumariposa/image/upload/v1595282898/profile-icon_jwxqyj.png" alt="profile-icon" className="profile-icon" /> </Link>
      </div>



      <ul className="header-nav-bar">
        <li>About</li>
        <li>Reviews</li>
        <li>Contact</li>
        <li>FAQ</li>
        <Link to="/usercreate"> <li className="side-text">Sign Up</li> </Link>
      </ul>

    </header>
  )
}
export default Header