import React from "react"
import "./UserHome.css"
import LogInHeader from "../../components/shared/LogInHeader/LogInHeader"
import Footer from "../../components/shared/Footer/Footer"
import WelcomeBanner from "../../components/shared/WelcomeBanner/WelcomeBanner"


const UserHome = () => {
  return (
    <>
      <LogInHeader />
      <main>
        <WelcomeBanner />
        <table className="activities-chart">
          <tbody>
            <tr className="rows">
              <td className="local-events">Local Events</td>
              <td className="weather">Weather</td>
            </tr>
            <tr className="rows">
              <td className="restaurants">Restaurants</td>
              <td className="currency">Currency</td>
            </tr>
            <tr className="rows">
              <td className="transportation">Transportation</td>
              <td className="languages">Languages</td>
            </tr>
            <tr className="rows">
              <td className="culture">Culture</td>
              <td className="shopping">Shopping</td>
            </tr>
          </tbody>
        </table>
      </main>
      <Footer />
    </>
  )
}

export default UserHome 