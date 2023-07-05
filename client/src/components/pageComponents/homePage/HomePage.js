import "./HomePage.css";
import locationIcon from "../../../assets/images/mdi-location.svg";
import startIcon from "../../../assets/images/arrow-up.svg";
import { useState } from "react";
import Navbar from "../../reusableComponent/navbar/Navbar";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <main className="home-content">
        <div className="home-content-left">
          <div className="home-titles-container">
            <h1 className="home-title">RESTAURANTS,</h1>
            <div className="home-title-subgroup">
              <h1 className="home-title">FOODS,</h1>
              <h3 className="home-subtitle">but HEALTHIER.</h3>
            </div>
          </div>
          <p className="home-decription">
            An AI-powered food map generator with nutritional info in your area.
          </p>
          <div className="home-input-bar">
            <img
              className="home-location-icon"
              src={locationIcon}
              alt="location icon"
            />
            <input
              className="home-input"
              type="text"
              placeholder="Enter you city or zip code"
            />
            <Link to="/SearchPage">
              <button className="home-start-button">
                <div className="home-start-icon">
                  <span>Start now</span>
                  <img src={startIcon} alt="startIcon" />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="home-content-right"></div>
      </main>
    </div>
  );
};

export default HomePage;
