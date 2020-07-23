import React from "react";
import "./Home.css";
import Header from "../../components/shared/Header/Header";
import Footer from "../../components/shared/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-picture"></div>
        <p className="home-hi">Hi there!</p>
        <div className="home-container3">
          <p className="home-paragraphs">
            <div className="home-one-sentence">
              <span className="home-w">W</span>e are here to take the load off
              of your study
            </div>
            abroad planning and research, so you can enjoy your stay.
          </p>
          <p className="home-paragraphs">
            Start a profile and begin your study abroad adventure! Or just
            search through the site to get a feel for what we offer.
          </p>
          <p className="home-paragraphs">
            Our goal is to be your one stop for information about your new home
            country, while keeping you connected to your roots.
          </p>
        </div>
        <div className="home-countries">
          <div className="home-europe"></div>
          <div className="home-americas"></div>
          <div className="home-asia"></div>
          <div className="home-africa"></div>
        </div>

        <div className="home-lejia">
          <p className="home-sentence1">
            “myAlpaca always has what I was looking for!”
          </p>
          <p className="home-name1"> -- Lejia</p>
        </div>
        <div className="home-rosemary">
          <p className="home-sentence2">
            “I recommend myAlpaca to anyone who is planning on studying
            abroad!!!”
          </p>
          <p className="home-name2"> -- Rosemary</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
