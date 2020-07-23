import React from "react"
import "./UserHome.css"
import LogInHeader from "../../components/shared/LogInHeader/LogInHeader"
import Footer from "../../components/shared/Footer/Footer"
import WelcomeBanner from "../../components/shared/WelcomeBanner/WelcomeBanner"


const UserHome = () => {
  return (
    <>
      <LogInHeader />
      <WelcomeBanner />
      <main className="activities-chart">
        <div className="row">
          <div className="local-events"><h1 className="image-text">Local Events</h1></div>
          <div className="weather"><h1 className="image-text">Weather</h1></div>
        </div>
        <div className="row">
          <div className="restaurants"><h1 className="image-text">Restaurants</h1></div>
          <div className="currency"><h1 className="image-text">Currency</h1></div>
        </div>
        <div className="row">
          <div className="transportation"><h1 className="image-text">Transporation</h1></div>
          <div className="languages"><h1 className="image-text">Languages</h1></div>
        </div>
        <div className="row">
          <div className="culture"><h1 className="image-text">Culture</h1></div>
          <div className="shopping"><h1 className="image-text">Shopping</h1></div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default UserHome 