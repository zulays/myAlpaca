import React from "react"
import "./UserHome.css"
import Header from "../../components/shared/Header/Header"
import Footer from "../../components/shared/Footer/Footer"
// import LogInHeader from "../../components/shared/LogInHeader/LogInHeader"

const UserHome = () => {
  return (
    <>
      <Header />
      {/* <LogInHeader /> */}
      <main>
        <h1>Log In</h1>
        <p>Don't have an account? <span fontWeight="700">Register</span> today!</p>
        <form>
          <label>Username or Email Address</label>
          <input type="text" className="inputs" />
          <label>Password</label>
          <input type="password" className="inputs" />
          <p className="forgot-pass">Forgot password?</p>
          <input type="checkbox" className="checkbox" /> <label className="checkbox-label">Remember Me</label>
          <button className="login-button">Log In</button>
        </form>
      </main>
      <Footer />
    </>
  )
}

export default UserHome 