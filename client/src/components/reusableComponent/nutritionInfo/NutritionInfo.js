import { useState } from "react";
import "./NutritionInfo.css";

const NutritionInfo = (props) => {
  return (
    <div className="nutrition-info-container">
      <div className="nutrition-info-top">
        <div className="calorie-info-container">
          <div className="calorie-title">Total Calorie</div>
          <div className="calorie">
            {props.item.calorie === 0
              ? "unavailable"
              : `${Math.round(props.item.calorie)} cal`}
          </div>
        </div>
      </div>
      <div className="nutrition-info-bottom">
        <div className="nutrition-info-ring-container">
          <div className="info-item">
            <div
              class="nutrition-info-ring"
              //   style={{
              //     background: `conic-gradient(#AFF9B2 ${
              //       nutritionValue * 3.6
              //     }deg, #525B69 0deg)`,
              //   }}
            >
              <span className="percentage-value">
                {`${Math.ceil((props.item.totalCarbohydrates / 90) * 100)}%`}
              </span>
              {/* <span className="percentage-value">{`${nutritionValue}%`}</span> */}
            </div>
            <div className="nutrition-info">
              <div className="info-title">Carbs</div>
              <div className="info-value">
                {`${Math.round(props.item.totalCarbohydrates)}g`}
              </div>
            </div>
          </div>
          <div className="info-item">
            <div class="nutrition-info-ring">
              <span className="percentage-value">
                {`${Math.ceil((props.item.totalProtien / 95) * 100)}%`}
              </span>
            </div>
            <div className="nutrition-info">
              <div className="info-title">Protein</div>
              <div className="info-value">
                {`${Math.round(props.item.totalProtien)}g`}
              </div>
            </div>
          </div>
          <div className="info-item">
            <div class="nutrition-info-ring">
              <span className="percentage-value">
                {`${Math.ceil((props.item.totalFat / 90) * 100)}%`}
              </span>
            </div>
            <div className="nutrition-info">
              <div className="info-title">Fat</div>
              <div className="info-value">
                {`${Math.round(props.item.totalFat)}g`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionInfo;
