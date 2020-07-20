import React from "react";
import "./WelcomeBanner.css";

const WelcomeBanner = () => {
  return (
    <>
      <div className="welcomebanner-biggest">
        <div className="welcomebanner-container">
          <p className="welcomebanner-welcome-back">
            Welcome back, <span className="welcomebanner-iris">Iris</span>!
          </p>
          <div className="welcomebanner-first">
            <p className="welcomebanner-destination">Dallas, United States</p>
            <p className="welcomebanner-no-longer-here">No longer here?</p>
          </div>
        </div>
        <div className="welcomebanner-second-container">
          <p className="welcomebanner-learn">
            What would you like to learn today?
          </p>

          <input
            className="welcomebanner-input"
            type="text"
            placeholder="Type key words..."
          />
          <span id="welcomebanner-icon"></span>
        </div>

        <div className="welcomebanner-frame14">
          <p className="welcomebanner-favorites">
            <span className="welcomebanner-heart"></span>
            My Favorites
          </p>
        </div>
      </div>
    </>
  );
};

export default WelcomeBanner;
