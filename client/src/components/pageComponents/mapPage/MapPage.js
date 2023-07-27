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
  const [displayData, setDisplayData] = useState([]); // move to redux
  const [restaurantId, setRestaurantId] = useState([]);
  const [dishId, setDishId] = useState([]);
  const [loading, setLoading] = useState(false);
  const [radius, setRadius] = useState(null);

  // temp test
  useEffect(() => {
    setDisplayData(data);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRadius = () => {};

  const handleExpandMenu = (id) => {
    restaurantId.includes(id)
      ? setRestaurantId(restaurantId.filter((existindId) => existindId !== id))
      : setRestaurantId((prev) => [...prev, id]);
    console.log(displayData);
  };
  const handleExpandDetail = (id) => {
    dishId.includes(id)
      ? setDishId(dishId.filter((existindId) => existindId !== id))
      : setDishId((prev) => [...prev, id]);
  };

  const restaurantDistance = (distance) => {
    let convertedDistance = Math.round(distance) / 1000;
    return convertedDistance.toFixed(1);
  };

  const handleScroll = () => {};

  return (
    <div className="map-page">
      <Navbar />
      {/* <Nav /> */}
      <main className="map-page-content">
        <SearchBar size={"small"} />
        <div className="map-main-content">
          <MapComponent />
          <div className="restaurants-container">
            <div className="map-radius-container" onClick={handleRadius}>
              <div>Radius</div>
              <div className="map-radius-number">1.5 km</div>
              <img src={dropdownIcon} alt="Dropdown Icon" />
            </div>
            {displayData.map((restaurant) => (
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
                        <img src={expandMenuIcon} alt="expand icon" />
                      </div>
                    </div>
                  </div>
                  {restaurantId.includes(restaurant.id) &&
                    restaurant.menu.map((item) => (
                      <div className="dish-info-container">
                        <div className="dish-info-top">
                          <div className="dish-info-top-left">
                            <div className="dish-name">{item.food}</div>
                            <div className="dish-calorie">{`${Math.round(
                              item.calorie
                            )} cal`}</div>
                          </div>
                          <div
                            className="dish-expand-container"
                            onClick={() => handleExpandDetail(item.uuid)}
                          >
                            <div>expand</div>
                            <img src={expandDetailIcon} alt="expand icon" />
                          </div>
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
                                <div className="calorie">{`${Math.round(
                                  item.calorie
                                )} cal`}</div>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
