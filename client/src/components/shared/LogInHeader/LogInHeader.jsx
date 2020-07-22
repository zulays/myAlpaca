import React from "react"
import "./LogInHeader.css"
import { Link } from "react-router-dom"

const LogInHeader = () => {



  return (

    <header className="header" >
      <div className="ticker-tape">
        <p className="ticker-tape-text">Click Here to Learn More about COVID-19 Travel Advisories</p>
        <img src="https://res.cloudinary.com/zumariposa/image/upload/v1595437166/myalpaca/Close_button_ystvyf.png" alt="close banner" className="exit-banner" />
      </div>


      <div className="header-user-bar">
        <div className="logo-set">
          <Link to="/userhome"><img src="https://res.cloudinary.com/zumariposa/image/upload/v1595435995/myalpaca/AlpacaLogo_nq6xqd.png" alt="myalpaca-logo" className="myalpaca-logo" /></Link>
          <h1 className="logo-text">myAlpaca</h1>
        </div>

        <div className="userprofile-logout">
          <Link to="/manageprofile"> <img src="https://res.cloudinary.com/zumariposa/image/upload/v1595435692/IrisProfilePicIcon_cvtu2d.png" alt="profile-icon" className="userprofile-icon" /></Link>
          <br />
          <Link to="/"> <p className="user-side-text">Log Out</p> </Link>
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
export default LogInHeader
