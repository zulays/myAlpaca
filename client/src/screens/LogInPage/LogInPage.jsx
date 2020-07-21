import React from "react"
import "./LogInPage.css"
import Header from "../../components/shared/Header/Header"
import Footer from "../../components/shared/Footer/Footer"
import { Link } from "react-router-dom"

const LogInPage = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Log In</h1>
        <p className="login-subtext">Don't have an account? <span fontWeight="700" className="register-text">Register</span> today!</p>
        <form>
          <label>Username or Email Address</label>
          <input type="text" className="inputs" />
          <label>Password</label>
          <input type="password" className="inputs" />
          <label className="forgot-pass">Forgot password?</label>
          <label className="checkbox-inline"><input type="checkbox" value="" className="checkbox" />Remember Me</label>
          <button className="loginpage-button">Log In</button>
        </form>
      </main>
      <Footer />
    </>
  )
}

export default LogInPage 