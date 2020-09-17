import React from "react";
import "../Css/MainImage.css";
const MainImage: React.FC = () => {
  return (
    <div className="wrap">
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
    </div>
  );
};

export default MainImage;
