import React from "react"
import "./Header.css"

const Header = () => {

  return (

    <header>

      <div className="ticker-tape">
        <p className="ticker-tape-text">Click Here to Learn More about COVID-19 Travel Advisories</p>
        <p className="exit-banner">x</p>

      </div>

      <div className="icon-bar">
        <div className="logo-set">
          <img src="#" alt="myalpaca-logo" className="logo" />
          <h1 className="logo-text">myAlpaca</h1>
        </div>
        <img src="#" alt="profile-icon" className="profile-icon" />
      </div>



      <ul className="nav-bar">
        <li>About</li>
        <li>Reviews</li>
        <li>Contact</li>
        <li>FAQ</li>
        <li className="side-text">Profile</li>
      </ul>

    </header>
  )
}
export default Header