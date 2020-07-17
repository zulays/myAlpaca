import React from "react"
import "./LogInPage.css"

const LogInPage = () => {

  return (
    <div>


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
