import "./MapPage.css";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import MapComponent from "../../reusableComponent/mapComponent/MapComponent";
import Nav from "../../reusableComponent/navComponent/Nav";
import { actions } from "../../../actions";
import Navbar from "../../reusableComponent/navbar/Navbar";
import SearchBar from "../../reusableComponent/searchBar/SearchBar";
import expandMenuIcon from "../../../assets/images/menu-expand.svg";
import expandDetailIcon from "../../../assets/images/detail-expand.svg";
import dropdownIcon from "../../../assets/images/dropdown.svg";
import { data } from "../../../assets/data/testData.js";

const MapPage = (props) => {
  const [restaurantId, setRestaurantId] = useState([]);
  const [dishId, setDishId] = useState([]);
  const [isChangingRadius, setIsChangingRadius] = useState(false);
  const [loading, setLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleData, setVisibleData] = useState([]);
  const shownItems = 5;

  useEffect(() => {
    updateVisibleData();
  }, []);

  useEffect(() => {
    updateVisibleData();
  }, [startIndex, data]);

  const handleRadius = () => {
    setIsChangingRadius((prev) => !prev);
  };

  const handleRadiusValue = (value) => {
    props.setRadius(value);
    setIsChangingRadius(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && typeof e.target.value === "number") {
      props.setRadius(e.target.value);
      setIsChangingRadius(false);
    }
  };

  const handleExpandMenu = (id) => {
    restaurantId.includes(id)
      ? setRestaurantId(restaurantId.filter((existingId) => existingId !== id))
      : setRestaurantId((prev) => [...prev, id]);
    console.log(data);
    console.log(visibleData);
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

  return (
    <div className="map-page">
      <Navbar />
      {/* <Nav /> */}
      <main className="map-page-content">
        <SearchBar size={"small"} />
        <div className="map-main-content">
          <MapComponent />
          <div className="restaurants-container" onScroll={handleScroll}>
            <div className="map-radius-container">
              <div className="map-radius">
                <div>Radius</div>
                <div className="map-radius-number">
                  {props.radius / 1000} km
                </div>
                <img
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
                    onClick={() => handleRadiusValue(100000)}
                  >
                    10 km
                  </div>
                  <div
                    className="radius-selection"
                    onClick={() => handleRadiusValue(150000)}
                  >
                    15 km
                  </div>
                </div>
              </div>
            </div>

            {visibleData.map((restaurant) => (
              <div className="restaurant-item-container" key={restaurant.id}>
                <div className="restaurant-item">
                  <div className="restaurant-info-container">
                    <div className="restaurant-info-top">
                      <div className="restaurant-info-left-top">
                        <div className="restaurant-name">{restaurant.name}</div>
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
                      <div className="dish-info-container">
                        <div className="dish-info-top">
                          <div className="dish-info-top-left">
                            <div className="dish-name">{item.food}</div>
                            <div className="dish-calorie">
                              {item.calorie === 0
                                ? "unknown"
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
                                    ? "unknown"
                                    : `${Math.round(item.calorie)} cal`}
                                </div>
                              </div>
                            </div>
                            <div className="nutrition-info-bottom">
                              <div class="progress-bar css">
                                <progress
                                  id="css"
                                  min="0"
                                  max="100"
                                  value="87"
                                ></progress>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  {props.isSearchingDish && (
                    <div className="dish-info-container">
                      <div className="dish-info-top">
                        <div className="dish-info-top-left">
                          <div className="dish-name">Chicken Fajita Taco</div>
                          <div className="dish-calorie">100 cal</div>
                        </div>
                        <div
                          className="dish-expand-container"
                          onClick={handleExpandDetail}
                        >
                          <div>expand</div>
                          <img src={expandDetailIcon} alt="expand icon" />
                        </div>
                      </div>
                      <div className="dish-description">
                        Spicy stir-fried chicken gizzards.
                      </div>
                      <div className="nutrition-info-container">
                        <div className="nutrition-info-top">
                          <div className="calorie-info-container">
                            <div className="calorie-title">Total Calorie</div>
                            <div className="calorie">100 cal</div>
                          </div>
                        </div>
                        <div className="nutrition-info-bottom">
                          <div class="progress-bar css">
                            <progress
                              id="css"
                              min="0"
                              max="100"
                              value="87"
                            ></progress>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="line-break"></div>
              </div>
            ))}
          </div>
          {/* temp button */}
        </div>
      </main>
      <footer>© 2023 all rights reserved.</footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.home.count,
  isSearchingDish: state.home.isSearchingDish,
  displayedRestaurantsData: state.home.displayedRestaurantsData,
  searchedDishId: state.home.searchedDishId,
  radius: state.home.mapData.radius,
});

const mapDispatchToProps = (dispatch) => ({
  addCount: () => dispatch(actions.addCounter()),
  minusCount: () => dispatch(actions.minusCounter()),
  setRadius: (value) => dispatch(actions.setRadius(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
