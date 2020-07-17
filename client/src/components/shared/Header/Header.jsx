import React from "react"
import "./Header.css"

const Header = () => {

  return (
    <header>

      <div className="ticker-tape">
        <p><span className="ticker-tape-text">Click Here to Learn More about COVID-19 Travel Advisories</span></p>
      </div>

      <div>
        <img src="#" />
        <h1>myAlpaca</h1>
      </div>

      <ul>
        <li>About</li>
        <li>Reviews</li>
        <li>Contact</li>
        <li>FAQ</li>
      </ul>

      <div>
        <img src="#" alt="profile-icon" />
        <p>Profile</p>
      </div>
    </header>
  )
}
export default Header