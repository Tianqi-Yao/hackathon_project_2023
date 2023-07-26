import "./MapPage.css";
import React from "react";
import { connect } from "react-redux";
import MapComponent from "../../reusableComponent/mapComponent/MapComponent";
import GoogleMap from "../../reusableComponent/mapComponent/GoogleMap";
import Nav from "../../reusableComponent/navComponent/Nav";
import { actions } from "../../../actions";
import Navbar from "../../reusableComponent/navbar/Navbar";
import SearchBar from "../../reusableComponent/searchBar/SearchBar";

function MapPage(props) {
  // address data placeholder
  const displayAddress = [
    "105 North Interstate Highway 35 Apt 35",
    "Austin, TX, US",
  ];

  // ui for searching specific dish
  // ui for searching restaurant

  return (
    <div className="map-page">
      <Navbar />
      {/* <Nav /> */}
      <main className="map-page-content">
        <SearchBar size={"small"} />
        <div className="map-main-content">
          <MapComponent />
          <div className="restaurants-container">
            <div className="map-radius-container">
              <div>Radius</div>
              <div className="map-radius-number">500m</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M6.125 8.75L10.5 13.125L14.875 8.75H6.125Z"
                  fill="#898989"
                />
              </svg>
            </div>
            <div className="restaurant-item-container">
              <div className="restaurant-item">
                <div className="restaurant-info-container">
                  <div className="restaurant-info-left">
                    <div className="restaurant-info-left-top">
                      <div className="restaurant-name">Restaurant Name</div>
                      <div className="restaurant-distance">0.6 mi</div>
                    </div>
                    <div className="restaurant-address-container">
                      {displayAddress.map((address, index) =>
                        address ===
                        displayAddress[displayAddress.length - 1] ? (
                          <div>{address}</div>
                        ) : (
                          <div>{address},</div>
                        )
                      )}
                    </div>
                  </div>
                  <div className="restaurant-info-right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.0004 3.51537L3.51537 12.0004L12.0004 20.4854L20.4854 12.0004L12.0004 3.51537ZM12.7074 1.39337L22.6074 11.2934C22.7948 11.4809 22.9002 11.7352 22.9002 12.0004C22.9002 12.2655 22.7948 12.5198 22.6074 12.7074L12.7074 22.6074C12.5198 22.7948 12.2655 22.9002 12.0004 22.9002C11.7352 22.9002 11.4809 22.7948 11.2934 22.6074L1.39337 12.7074C1.2059 12.5198 1.10059 12.2655 1.10059 12.0004C1.10059 11.7352 1.2059 11.4809 1.39337 11.2934L11.2934 1.39337C11.4809 1.2059 11.7352 1.10059 12.0004 1.10059C12.2655 1.10059 12.5198 1.2059 12.7074 1.39337ZM13.0004 10.0004V7.50037L16.5004 11.0004L13.0004 14.5004V12.0004H10.0004V15.0004H8.00037V11.0004C8.00037 10.7352 8.10573 10.4808 8.29327 10.2933C8.4808 10.1057 8.73516 10.0004 9.00037 10.0004H13.0004Z"
                        fill="#ED7F42"
                      />
                    </svg>
                    <div>Directions</div>
                  </div>
                </div>
                <div className="dish-info-container">
                  <div className="dish-info-left">
                    <div className="dish-name">Chicken Fajita Taco</div>
                    <div className="dish-calorie">100 cal</div>
                  </div>
                  <div className="dish-expand-container">
                    <div>expand</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_54_956)">
                        <path
                          d="M2.84961 1.50039L7.34961 6.00039L2.84961 10.5004L3.74961 11.4004L9.14961 6.00039L3.74961 0.60039L2.84961 1.50039Z"
                          fill="#898989"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_54_956">
                          <rect
                            width="12"
                            height="12"
                            fill="white"
                            transform="translate(0 12) rotate(-90)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="line-break"></div>
              <button>Load More</button>
              {/* placeholder for slide */}
            </div>
          </div>
        </div>
      </main>
      {/* <div>{props.count}</div>
      <button onClick={props.minusCount}>Decrement</button>
      <button onClick={props.addCount}>Increment</button> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.home.count,
  isSearchingDish: state.home.isSearchingDish,
});

const mapDispatchToProps = (dispatch) => ({
  addCount: () => dispatch(actions.addCounter()),
  minusCount: () => dispatch(actions.minusCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
