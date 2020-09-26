import React from "react";
import "../Css/MainImage.css";
import { Link } from "react-router-dom";
const MainImage: React.FC = () => {
  return (
    <div className="wrap">
      <Link to="/Products/Fresh">
        <div className="left">
          <h3>START YOUR DAY</h3>
          <h4>with vit-plate</h4>
          <div>
            <span>
              <strong>special pack</strong>
            </span>
            <span>
              <strong>Healthy deal</strong>
            </span>
          </div>
        </div>
      </Link>
      <Link to="/Products/Fresh/Raspberries">
        <div className="right">
          <h3>C-OVERLOAD</h3>
          <div>
            <span>
              <strong>20% discount</strong>
            </span>
            <span>
              <strong>Septemberdeal</strong>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MainImage;
