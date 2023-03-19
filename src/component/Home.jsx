import React from "react";
import "../allcss/Home.css";
import "./Header";
import Header from "./Header";
const Home = () => {
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <Header />
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY PORTFOLIO</h1>
              <h2 className="home__text pz__10">Hi, I'm Bikash Kumar Panda</h2>
              <h3 className="home__text sweet pz__10">
                Fronted Developer , Software Devloper
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
