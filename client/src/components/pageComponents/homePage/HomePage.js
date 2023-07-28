import "./HomePage.css";
import locationIcon from "../../../assets/images/mdi-location.svg";
import startIcon from "../../../assets/images/arrow-up.svg";
import { useState, useEffect, useRef } from "react";
import Navbar from "../../reusableComponent/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../../../actions";
import { Loader } from "@googlemaps/js-api-loader";

const HomePage = (props) => {
  const [input, setInput] = useState("");
  const autocompleteRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_MAP_API_KEY, // 在这里填写你的 Google Maps API Key
      version: "weekly"
    });

    loader.importLibrary("places").then(() => {
      const autocomplete = new window.google.maps.places.Autocomplete(autocompleteRef.current);

      autocomplete.addListener('place_changed', function () {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          // The user selected a place without a specific location.
          console.error('No location data available for the selected place.');
          return;
        }
        const location = place.geometry.location;
        const address = place.formatted_address;
        console.log("location", location);
        console.log("Latitude: " + location.lat());
        console.log("Longitude: " + location.lng());
        console.log("Address: " + address);
        setInput(address);
        props.setUserAddress(address);
        props.setUserGeometry({ lat: location.lat(), lng: location.lng() });
      });
    });
  }, []);

  const handleLocationIcon = () => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      props.setUserGeometry({ lat: latitude, lng: longitude });
      console.log("latitude my", latitude);
      console.log("longitude my", longitude);
    });
    setInput("Your current address has been located.");
  };

  const handleInput = () => {
    props.getInputLocation(input);
    if (JSON.stringify(props.userGeometry) !== "{}") {
      setInput("");
      navigate("/SearchPage");
    } else {
      console.log("no userGeometry");
      alert("Please enter a location.");
    }
  };

  return (
    <div className="home-page">
      <Navbar />
      <main className="home-content">
        <div className="home-content-left">
          <div className="home-titles-container">
            <h1 className="home-title">RESTAURANTS and FOODS</h1>
            <h3 className="home-subtitle">but HEALTHIER.</h3>
          </div>
        </div>
        <div className="home-content-right">
          <p className="home-decription">
            An AI-powered food map search engine to know your local foods and
            restaurants better.
          </p>
          <div className="home-input-bar">
            <img
              className="home-location-icon"
              src={locationIcon}
              alt="location icon"
              onClick={() => { handleLocationIcon() }}
            />
            <input
              className="home-input"
              type="text"
              ref={autocompleteRef}
              placeholder="Enter a city, address or zip code"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="home-start-button" onClick={handleInput}>
              <div className="home-start-icon">
                <span>Start now</span>
                <img src={startIcon} alt="startIcon" />
              </div>
            </button>
          </div>
        </div>
      </main>
      <footer>© 2023 all rights reserved.</footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  inputLocationStr: state.home.inputLocationStr,
  userGeometry: state.home.userGeometry,
});

const mapDispatchToProps = (dispatch) => ({
  getInputLocation: (location) => dispatch(actions.getInputLocation(location)),
  setUserAddress: (address) => dispatch(actions.setUserAddress(address)),
  setUserGeometry: (geometry) => dispatch(actions.setUserGeometry(geometry)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
