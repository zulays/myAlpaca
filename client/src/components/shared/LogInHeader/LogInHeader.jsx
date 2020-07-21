import React from "react"
import "./LogInHeader.css"
import { Link } from "react-router-dom"

const LogInHeader = () => {

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
        <Link to="/manageprofile"> <img src="https://res.cloudinary.com/zumariposa/image/upload/v1595284487/Untitled_Artwork_4_g7su9q.png" alt="profile-icon" className="profile-icon" /></Link>
      </div>

      <div className="header-nav-bar">
        <h3 className="login-nav-text">About</h3>
        <h3 className="login-nav-text">Reviews</h3>
        <h3 className="login-nav-text">Contact</h3>
        <h3 className="login-nav-text">FAQ</h3>
        <div className="logout-text">
          <Link to="/"><h3 className="login-nav-text">Log Out</h3></Link>
        </div>
      </div>


    </header>
  )
}
export default LogInHeader
