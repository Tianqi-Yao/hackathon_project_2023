import "./MapPage.css";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import MapComponent from "../../reusableComponent/mapComponent/MapComponent";
import RestaurantItem from "../../reusableComponent/restaurantItem/RestaurantItem";
import Loading from "../../reusableComponent/loading/Loading";
import RestaurantItem from "../../reusableComponent/restaurantItem/RestaurantItem";
import Loading from "../../reusableComponent/loading/Loading";
import Nav from "../../reusableComponent/navComponent/Nav";
import { actions } from "../../../actions";
import Navbar from "../../reusableComponent/navbar/Navbar";
import SearchBar from "../../reusableComponent/searchBar/SearchBar";
import dropdownIcon from "../../../assets/images/dropdown.svg";
import { data } from "../../../assets/data/testData.js";
import { useNavigate } from "react-router-dom";

const MapPage = (props) => {
  const [restaurantId, setRestaurantId] = useState([]);
  const [dishId, setDishId] = useState([]);
  const [isChangingRadius, setIsChangingRadius] = useState(false);
  const [loading, setLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleData, setVisibleData] = useState([]);
  const [nutritionValue, setNutritionValue] = useState(20);
  const shownItems = 5;
  const navigate = useNavigate();

  useEffect(() => {
    if (props.searchedDishId.length === 0) {
      navigate("/");
    }
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

  const handleExpandMenu = (id) => {
    restaurantId.includes(id)
      ? setRestaurantId(restaurantId.filter((existingId) => existingId !== id))
      : setRestaurantId((prev) => [...prev, id]);
    props.searchedDishId.map((itemId) => console.log(Object.keys(itemId)));
    console.log(props.searchedDishId);
  };

  const handleExpandDetail = (id) => {
    dishId.includes(id)
      ? setDishId(dishId.filter((existingId) => existingId !== id))
      : setDishId((prev) => [...prev, id]);
  };

  const restaurantDistance = (distance) => {
    let convertedDistance = Math.round(distance) / 1000;
    return convertedDistance.toFixed(1);
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
              {/* <div className="loading-icon-container">
                <Loading />
              </div> */}
              {visibleData.map((restaurant) => (
                <div className="restaurant-item-container" key={restaurant.id}>
                  <div
                    className={`restaurant-item${
                      visibleData.indexOf(restaurant) === 0 ? "-first" : ""
                    }`}
                  >
                    <div className="restaurant-info-container">
                      <div className="restaurant-info-top">
                        <div className="restaurant-info-left-top">
                          <div className="restaurant-name">
                            {restaurant.name}
                          </div>
                          <div className="restaurant-distance">{`${restaurantDistance(
                            restaurant.distance
                          )} km · ${
                            restaurant.is_closed ? "closed" : "open"
                          }`}</div>
                        </div>
                        <div className="restaurant-rating">{`${
                          restaurant.price == undefined
                            ? ""
                            : restaurant.price + " ·"
                        } ${restaurant.rating} (${
                          restaurant.review_count
                        })`}</div>
                      </div>
                      <div className="restaurant-address-container">
                        {restaurant.location.display_address.map((address) =>
                          address ===
                          restaurant.location.display_address[
                            restaurant.location.display_address.length - 1
                          ] ? (
                            <div>{address}</div>
                          ) : (
                            <div>{address},</div>
                          )
                        )}
                      </div>
                      <div className="restaurant-info-bottom">
                        <div className="tags-container">
                          <div className="average-calorie">{`Avg. ${Math.round(
                            restaurant.averageCalorie
                          )} cal`}</div>
                          {restaurant.categories.map((category) => (
                            <div className="categories">{category.title}</div>
                          ))}
                        </div>
                        <div
                          className="menu-btn-container"
                          onClick={() => handleExpandMenu(restaurant.id)}
                        >
                          <div>Menu</div>
                          <img
                            className={
                              restaurantId.includes(restaurant.id)
                                ? "expanded-menu"
                                : ""
                            }
                            src={expandMenuIcon}
                            alt="expand icon"
                          />
                        </div>
                      </div>
                    </div>
                    {restaurantId.includes(restaurant.id) &&
                      restaurant.menu.map((item) => (
                        <div className="dish-info-container" key={item.uuid}>
                          <div className="dish-info-top">
                            <div className="dish-info-top-left">
                              <div className="dish-name">{item.food}</div>
                              <div className="dish-calorie">
                                {item.calorie === 0
                                  ? "unavailable"
                                  : `${Math.round(item.calorie)} cal`}
                              </div>
                            </div>
                            {item.calorie === 0 ? (
                              <div className="dish-expand-container-disabled">
                                <div>expand</div>
                                <img
                                  className="expand-disabled"
                                  src={expandDetailIcon}
                                  alt="expand icon"
                                />
                              </div>
                            ) : (
                              <div
                                className="dish-expand-container"
                                onClick={() => handleExpandDetail(item.uuid)}
                              >
                                <div>expand</div>
                                <img
                                  className={
                                    dishId.includes(item.uuid)
                                      ? "expanded-detail"
                                      : ""
                                  }
                                  src={expandDetailIcon}
                                  alt="expand icon"
                                />
                              </div>
                            )}
                          </div>
                          <div className="dish-description">
                            {item.ingredients}
                          </div>
                          {dishId.includes(item.uuid) && (
                            <div className="nutrition-info-container">
                              <div className="nutrition-info-top">
                                <div className="calorie-info-container">
                                  <div className="calorie-title">
                                    Total Calorie
                                  </div>
                                  <div className="calorie">
                                    {item.calorie === 0
                                      ? "unavailable"
                                      : `${Math.round(item.calorie)} cal`}
                                  </div>
                                </div>
                              </div>
                              <div className="nutrition-info-bottom">
                                <div className="nutrition-info-ring-container">
                                  <div className="info-item">
                                    <div class="nutrition-info-ring">
                                      <span className="percentage-value">
                                        10%
                                      </span>
                                    </div>
                                    <div className="nutrition-info">
                                      <div className="info-title">Carbs</div>
                                      <div className="info-value">30g</div>
                                    </div>
                                  </div>
                                  <div className="info-item">
                                    <div class="nutrition-info-ring">
                                      <span className="percentage-value">
                                        10%
                                      </span>
                                    </div>
                                    <div className="nutrition-info">
                                      <div className="info-title">Protein</div>
                                      <div className="info-value">40g</div>
                                    </div>
                                  </div>
                                  <div className="info-item">
                                    <div class="nutrition-info-ring">
                                      <span className="percentage-value">
                                        10%
                                      </span>
                                    </div>
                                    <div className="nutrition-info">
                                      <div className="info-title">Fat</div>
                                      <div className="info-value">250g</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    {props.searchedDishId.length > 0 &&
                      !restaurantId.includes(restaurant.id) &&
                      restaurant.menu.map((item) =>
                        props.searchedDishId.map(
                          (itemId) =>
                            Object.keys(itemId)[0] === item.uuid && (
                              <div
                                className="dish-info-container"
                                key={item.uuid}
                              >
                                <div className="dish-info-top">
                                  <div className="dish-info-top-left">
                                    <div className="dish-name">{item.food}</div>
                                    <div className="dish-calorie">
                                      {" "}
                                      {item.calorie === 0
                                        ? "unavailable"
                                        : `${Math.round(item.calorie)} cal`}
                                    </div>
                                  </div>
                                  {item.calorie === 0 ? (
                                    <div className="dish-expand-container-disabled">
                                      <div>expand</div>
                                      <img
                                        className="expand-disabled"
                                        src={expandDetailIcon}
                                        alt="expand icon"
                                      />
                                    </div>
                                  ) : (
                                    <div
                                      className="dish-expand-container"
                                      onClick={() =>
                                        handleExpandDetail(item.uuid)
                                      }
                                    >
                                      <div>expand</div>
                                      <img
                                        className={
                                          dishId.includes(item.uuid)
                                            ? "expanded-detail"
                                            : ""
                                        }
                                        src={expandDetailIcon}
                                        alt="expand icon"
                                      />
                                    </div>
                                  )}
                                </div>
                                <div className="dish-description">
                                  {item.ingredients}
                                </div>
                                {dishId.includes(item.uuid) && (
                                  <div className="nutrition-info-container">
                                    <div className="nutrition-info-top">
                                      <div className="calorie-info-container">
                                        <div className="calorie-title">
                                          Total Calorie
                                        </div>
                                        <div className="calorie">
                                          {item.calorie === 0
                                            ? "unavailable"
                                            : `${Math.round(item.calorie)} cal`}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="nutrition-info-bottom">
                                      <div className="nutrition-info-ring-container">
                                        <div className="info-item">
                                          <div class="nutrition-info-ring">
                                            <span className="percentage-value">
                                              10%
                                            </span>
                                          </div>
                                          <div className="nutrition-info">
                                            <div className="info-title">
                                              Carbs
                                            </div>
                                            <div className="info-value">
                                              30g
                                            </div>
                                          </div>
                                        </div>
                                        <div className="info-item">
                                          <div class="nutrition-info-ring">
                                            <span className="percentage-value">
                                              10%
                                            </span>
                                          </div>
                                          <div className="nutrition-info">
                                            <div className="info-title">
                                              Protein
                                            </div>
                                            <div className="info-value">
                                              40g
                                            </div>
                                          </div>
                                        </div>
                                        <div className="info-item">
                                          <div class="nutrition-info-ring">
                                            <span className="percentage-value">
                                              10%
                                            </span>
                                          </div>
                                          <div className="nutrition-info">
                                            <div className="info-title">
                                              Fat
                                            </div>
                                            <div className="info-value">
                                              250g
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )
                        )
                      )}
                  </div>
                  <div className="line-break"></div>
                </div>
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
