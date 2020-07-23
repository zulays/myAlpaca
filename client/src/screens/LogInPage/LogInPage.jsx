import React from "react"
import "./LogInPage.css"
import Header from "../../components/shared/Header/Header"
import Footer from "../../components/shared/Footer/Footer"
import { Link } from "react-router-dom"

const LogInPage = () => {
  return (
    <>
      <Header />
      <main className="login-body">
        <h1 className="login-title">Log In</h1>
        <p className="login-subtext">Don't have an account? <Link to="/usercreate"><span fontWeight="700" className="register-text">Register</span></Link> today!</p>
        <form className="login-form">
          <label className="inputs-label">Username or Email Address</label>
          <input type="text" className="inputs" />
          <label className="inputs-label">Password</label>
          <input type="password" className="inputs" />
          <label className="forgot-pass">Forgot password?</label>
          <label className="checkbox-inline"><input type="checkbox" value="" className="rem-checkbox" />Remember Me</label>
          <button className="loginpage-button">Log In</button>
        </form>
      </main>
      <Footer />
    </>
  )
}

export default LogInPage 