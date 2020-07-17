import React from "react"
import "./LogInPage.css"

const LogInPage = () => {

  return (
    <div>
      <header>
        <div className="ticker-tape">
          <p>Click Here to Learn More about COVID-19 Travel Advisories</p>
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

      <main>
        <h1>Log In</h1>
        <h3>Don't have an account? <span>Register</span> today!</h3>
        <form>
          <h4>Username or Email Address</h4>
          <input type="text" className="inputs" />
          <h4>Password</h4>
          <input type="password" className="inputs" />
          <p><span font-size="10px">Forgot password?</span></p>
          <input type="checkbox" className="checkbox" /> <label>Remember Me</label>
          <button className="login-button">Log In</button>
        </form>
      </main>

      {/* <Footer /> */}
    </div>
  )
}

export default LogInPage 
