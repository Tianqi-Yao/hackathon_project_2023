import { useState } from "react";
import "./FoodItem.css";
import NutritionInfo from "../nutritionInfo/NutritionInfo";
import expandDetailIcon from "../../../assets/images/detail-expand.svg";

const FoodItem = (props) => {
  return (
    <div className="dish-info-container" key={props.item.uuid}>
      <div className="dish-info-top">
        <div className="dish-info-top-left">
          <div className="dish-name">{props.item.food}</div>
          <div className="dish-calorie">
            {props.item.calorie === 0
              ? "unavailable"
              : `${Math.round(props.item.calorie)} cal`}
          </div>
        </div>
        {props.item.calorie === 0 ? (
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
            onClick={() => props.handleExpandDetail(props.item.uuid)}
          >
            <div>expand</div>
            <img
              className={
                props.dishId.includes(props.item.uuid) ? "expanded-detail" : ""
              }
              src={expandDetailIcon}
              alt="expand icon"
            />
          </div>
        )}
      </div>
      <div className="dish-description">{props.item.ingredients}</div>
      {props.dishId.includes(props.item.uuid) && (
        <NutritionInfo item={props.item} />
      )}
    </div>
  );
};

export default FoodItem;
