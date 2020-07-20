import React from "react"
import "./LogInHeader.css"

const LogInHeader = () => {

  return (

    <header>

      <div className="ticker-tape">
        <p className="ticker-tape-text">Click Here to Learn More about COVID-19 Travel Advisories</p>
        <p className="exit-banner">x</p>

      </div>

      <div className="icon-bar">
        <div className="logo-set">
          <img src="#" alt="myalpaca-logo" className="myalpaca-logo" />
          <h1 className="logo-text">myAlpaca</h1>
        </div>
        <img src="#" alt="profile-icon" className="profile-icon" />
      </div>




      <div className="nav-bar">
        <h3>About</h3>
        <h3>Reviews</h3>
        <h3>Contact</h3>
        <h3>FAQ</h3>
        <div className="logout-text">
          <h3>Log Out</h3>
        </div>
      </div>


      {/* <ul className="nav-bar">

      <ul className="nav-bar">

        <li>About</li>
        <li>Reviews</li>
        <li>Contact</li>
        <li>FAQ</li>
        <li className="side-text">Log Out</li>
      </ul> */}

    </header>
  )
}
export default LogInHeader