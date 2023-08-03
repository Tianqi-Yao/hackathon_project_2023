import { useState } from "react";
import "./Loading.css";

const Loading = ({ term }) => {
  return (
    <div className="loading-container">
      <div className="loading-icon"></div>
      <div className="loading-text">{term}...</div>
    </div>
  );
};

export default Loading;
