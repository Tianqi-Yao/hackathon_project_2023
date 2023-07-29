import { useState } from "react";
import "./RestaurantItem.css";
import { connect } from "react-redux";
import { actions } from "../../../actions";
import expandMenuIcon from "../../../assets/images/menu-expand.svg";
import FoodItem from "../foodItem/FoodItem";

const RestaurantItem = (props) => {
  const restaurantDistance = (distance) => {
    let convertedDistance = Math.round(distance) / 1000;
    return convertedDistance.toFixed(1);
  };

  return (
    <div className="restaurant-item-container" key={props.restaurant.id}>
      <div
        className={`restaurant-item${
          props.visibleData.indexOf(props.restaurant) === 0 ? "-first" : ""
        }`}
      >
        <div className="restaurant-info-container">
          <div className="restaurant-info-top">
            <div className="restaurant-info-left-top">
              <div className="restaurant-name">{props.restaurant.name}</div>
              <div className="restaurant-distance">{`${restaurantDistance(
                props.restaurant.distance
              )} km · ${props.restaurant.is_closed ? "closed" : "open"}`}</div>
            </div>
            <div className="restaurant-rating">{`${
              props.restaurant.price == undefined
                ? ""
                : props.restaurant.price + " ·"
            } ${props.restaurant.rating} (${
              props.restaurant.review_count
            })`}</div>
          </div>
          <div className="restaurant-address-container">
            {props.restaurant.location.display_address.map((address) =>
              address ===
              props.restaurant.location.display_address[
                props.restaurant.location.display_address.length - 1
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
                props.restaurant.averageCalorie
              )} cal`}</div>
              {props.restaurant.categories.map((category) => (
                <div className="categories">{category.title}</div>
              ))}
            </div>
            <div
              className="menu-btn-container"
              onClick={() => props.handleExpandMenu(props.restaurant.id)}
            >
              <div>Menu</div>
              <img
                className={
                  props.restaurantId.includes(props.restaurant.id)
                    ? "expanded-menu"
                    : ""
                }
                src={expandMenuIcon}
                alt="expand icon"
              />
            </div>
          </div>
        </div>
        {props.restaurantId.includes(props.restaurant.id) &&
          props.restaurant.menu.map((item) => (
            <FoodItem
              item={item}
              dishId={props.dishId}
              handleExpandDetail={props.handleExpandDetail}
            />
          ))}
        {props.searchedDishId.length > 0 &&
          !props.restaurantId.includes(props.restaurant.id) &&
          props.restaurant.menu.map((item) =>
            props.searchedDishId.map(
              (itemId) =>
                Object.keys(itemId)[0] === item.uuid && (
                  <FoodItem
                    item={item}
                    dishId={props.dishId}
                    handleExpandDetail={props.handleExpandDetail}
                  />
                )
            )
          )}
      </div>
      <div className="line-break"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantItem);
