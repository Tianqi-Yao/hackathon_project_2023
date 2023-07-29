import "./MapPage.css";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import MapComponent from "../../reusableComponent/mapComponent/MapComponent";
import RestaurantItem from "../../reusableComponent/restaurantItem/RestaurantItem";
import Loading from "../../reusableComponent/loading/Loading";
import Nav from "../../reusableComponent/navComponent/Nav";
import { actions } from "../../../actions";
import Navbar from "../../reusableComponent/navbar/Navbar";
import SearchBar from "../../reusableComponent/searchBar/SearchBar";
import dropdownIcon from "../../../assets/images/dropdown.svg";
import { data } from "../../../assets/data/testData.js";

const MapPage = (props) => {
  const [restaurantId, setRestaurantId] = useState([]);
  const [dishId, setDishId] = useState([]);
  const [isChangingRadius, setIsChangingRadius] = useState(false);
  const [loading, setLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleData, setVisibleData] = useState([]);
  const [nutritionValue, setNutritionValue] = useState(20);
  const shownItems = 5;

  useEffect(() => {
    updateVisibleData();
  }, []);

  useEffect(() => {
    updateVisibleData();
  }, [startIndex, data]);

  // useEffect(() => {
  //   const progress = setInterval(() => {
  //     setNutritionValue((prev) => {
  //       const newProgress = prev++;
  //       if (newProgress >= 80) {
  //         clearInterval(progress);
  //       }
  //       return newProgress;
  //     });
  //   }, 100);

  //   return () => {
  //     clearInterval(progress);
  //   };
  // }, []);

  const handleRadius = () => {
    setIsChangingRadius((prev) => !prev);
  };

  const handleRadiusValue = (value) => {
    props.setRadius(value);
    setIsChangingRadius(false);
  };

  const handleScroll = (e) => {
    const container = e.target;
    if (
      container.scrollTop + container.clientHeight >=
      container.scrollHeight
    ) {
      console.log("scrolled");
      // fetch data
      setStartIndex((prevStartIndex) => prevStartIndex + shownItems);
    }
  };

  const updateVisibleData = () => {
    const endIndex = startIndex + shownItems;
    const newData = data.slice(0, endIndex);
    setVisibleData(newData);
  };

  const handleExpandMenu = (id) => {
    restaurantId.includes(id)
      ? setRestaurantId(restaurantId.filter((existingId) => existingId !== id))
      : setRestaurantId((prev) => [...prev, id]);
    console.log(props.searchedDishId);
  };

  const handleExpandDetail = (id) => {
    dishId.includes(id)
      ? setDishId(dishId.filter((existingId) => existingId !== id))
      : setDishId((prev) => [...prev, id]);
    const progress = setInterval(() => {
      setNutritionValue((prev) => {
        const newProgress = prev++;
        if (newProgress >= 80) {
          clearInterval(progress);
        }
        return newProgress;
      });
    }, 100);
  };

  return (
    <div className="map-page">
      <Navbar />
      {/* <Nav /> */}
      <main className="map-page-content">
        <div className="search-bar-container">
          <SearchBar size={"small"} />
        </div>
        <div className="map-main-content">
          <MapComponent />
          <div className="result-content-container">
            <div className="map-radius-container">
              <div className="map-radius">
                <div>Radius</div>
                <div className="map-radius-number">
                  {props.radius / 1000} km
                </div>
                <img
                  className="dropdown-icon"
                  src={dropdownIcon}
                  alt="Dropdown Icon"
                  onClick={handleRadius}
                />
              </div>
              <div
                className={`map-radius-dropdown${
                  isChangingRadius ? "-shown" : ""
                }`}
              >
                <div className="radius-top">
                  <div>Radius</div>
                  <div className="map-radius-number">
                    {props.radius / 1000} km
                  </div>
                  <img
                    className="dropdown-icon"
                    src={dropdownIcon}
                    alt="Dropdown Icon"
                    onClick={handleRadius}
                  />
                </div>
                <div className="radius-selections-container">
                  <div
                    className="radius-selection"
                    onClick={() => handleRadiusValue(5000)}
                  >
                    5 km
                  </div>
                  <div
                    className="radius-selection"
                    onClick={() => handleRadiusValue(10000)}
                  >
                    10 km
                  </div>
                  <div
                    className="radius-selection"
                    onClick={() => handleRadiusValue(15000)}
                  >
                    15 km
                  </div>
                </div>
              </div>
            </div>
            <div className="restaurants-container" onScroll={handleScroll}>
              {/* <div className="loading-icon-container">
                <Loading />
              </div> */}
              {visibleData.map((restaurant) => (
                <RestaurantItem
                  restaurant={restaurant}
                  visibleData={visibleData}
                  handleExpandMenu={handleExpandMenu}
                  handleExpandDetail={handleExpandDetail}
                  restaurantId={restaurantId}
                  dishId={dishId}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer>© 2023 all rights reserved.</footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isSearchingDish: state.home.isSearchingDish,
  displayedRestaurantsData: state.home.displayedRestaurantsData,
  searchedDishId: state.home.searchedDishId,
  radius: state.home.mapData.radius,
});

const mapDispatchToProps = (dispatch) => ({
  setRadius: (value) => dispatch(actions.setRadius(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
