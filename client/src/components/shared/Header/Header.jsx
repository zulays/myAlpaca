import React, { Component } from "react"
import "./Header.css"
import { Link } from "react-router-dom"
// import { getUsers } from "../services/users";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
    };
  }

  // componentDidMount = async () => {
  //   const users = await getUsers();
  //   this.setState({
  //     user: users[users.length - 1],
  //   });
  // };




  render() {

    return (

      <header className="header" >
        <div className="ticker-tape">
          <p className="ticker-tape-text">Click Here to Learn More about COVID-19 Travel Advisories</p>
          <p className="exit-banner">x</p>
        </div>

        <div className="header-icon-bar">
          <div className="logo-set">
            <img src="https://res.cloudinary.com/zumariposa/image/upload/v1595369300/myalpaca/alpaca-logo-UPDATED_nat42o.png" alt="myalpaca-logo" className="myalpaca-logo" />
            <h1 className="logo-text">myAlpaca</h1>
          </div>

          <div className="userprofile-signup">
            <Link to="/usercreate">  <img src="https://res.cloudinary.com/zumariposa/image/upload/v1595369300/myalpaca/profile-icon-update_ifapdk.png" alt="profile-icon" className="nouser-profile-icon" /> <br /><p className="nouser-side-text">Sign Up</p> </Link>
          </div>
        </div>



        <div className="header-nav-bar">
          <h3>About</h3>
          <h3>Reviews</h3>
          <h3>Contact</h3>
          <h3>FAQ</h3>
        </div>

      </header>
    )
  }
}
export default Header