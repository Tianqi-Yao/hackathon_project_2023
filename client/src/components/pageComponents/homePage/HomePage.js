import "./HomePage.css";
import locationIcon from "../../../assets/images/mdi-location.svg";
import startIcon from "../../../assets/images/arrow-up.svg";
import { useState } from "react";
import Navbar from "../../reusableComponent/navbar/Navbar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../../../actions";

const HomePage = (props) => {
  const [input, setInput] = useState("");

  const handleInput = () => {
    props.getInputLocation(input);
    setInput("");
  };

  return (
    <div className="home-page">
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
              placeholder="Enter a city, address or zip code"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Link to="/SearchPage">
              <button className="home-start-button" onClick={handleInput}>
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

const mapStateToProps = (state) => ({
  inputLocationStr: state.home.inputLocationStr,
});

const mapDispatchToProps = (dispatch) => ({
  getInputLocation: (location) => dispatch(actions.getInputLocation(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
