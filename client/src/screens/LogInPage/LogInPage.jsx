import React from "react"
import "./LogInPage.css"
<<<<<<< HEAD
import Header from "../components/shared/Header/Header"
import Footer from "../components/shared/Footer/Footer"


const LogInPage = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Log In</h1>
        <p>Don’t have an account? <span className="register">Register</span> today!</p>
=======
import Header from "../../components/shared/Header/Header"
import Footer from "../../components/shared/Footer/Footer"

const LogInPage = () => {

  return (
    <div>

      <Header />
      <main>
        <h1>Log In</h1>
        <p>Don't have an account? <span className="register">Register</span> today!</p>
>>>>>>> b854c83eeca86356db7376757491de24d3fd06e5
        <form>
          <label>Username or Email Address</label>
          <input type="text" className="inputs" />
          <label>Password</label>
<<<<<<< HEAD
          <input type="password" className=" inputs" />
          <p className="forgot-pass">Forgot password?</p>
          <input type="checkbox" className="checkbox" /> <label className="checkbox-label">Remember Me</label>
          <button className=" login-button">Log In</button>
        </form >
      </main >
      <Footer />
    </div >
  )
}
export default LogInPage
=======
          <input type="password" className="inputs" />
          <p className="forgot-pass">Forgot password?</p>
          <input type="checkbox" className="checkbox" /> <label className="checkbox-label">Remember Me</label>
          <button className="login-button">Log In</button>
        </form>
      </main>

      <Footer />
    </div>
  )
}

export default LogInPage 
>>>>>>> b854c83eeca86356db7376757491de24d3fd06e5
