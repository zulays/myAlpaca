import React from "react"
import "./LogInPage.css"
import Header from "../../components/shared/Header/Header"
import Footer from "../../components/shared/Footer/Footer"

const LogInPage = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Log In</h1>
        <p>Don't have an account? <span fontWeight="700">Register</span> today!</p>
        <form>
          <label>Username or Email Address</label>
          <input type="text" className="inputs" />
          <label>Password</label>
          <input type="password" className="inputs" />
          <p className="forgot-pass">Forgot password?</p>
          <label className="checkbox-inline"><input type="checkbox" value="" className="checkbox" />Remember Me</label>
          <button className="login-button">Log In</button>
        </form>
      </main>
      <Footer />
    </>
  )
}

export default LogInPage 