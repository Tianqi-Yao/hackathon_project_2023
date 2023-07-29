import { useState } from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-icon"></div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default Loading;
