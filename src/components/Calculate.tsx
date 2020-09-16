import React from "react";
import "../Css/Calculate.css";
const Calculate = () => {
  return (
    <div className="Calculate">
      <div className="Cal_left">
        <div>
          <h2>SPECIAL OFFER</h2>
          <h4>Stanley Plums</h4>
          <span>Harvest2015 | In stock | kg</span>
          <strong>$4.25</strong>
          <em>per killogram</em>
          <div className="Cal_Button">
            <button>ADD TO BAG</button>
          </div>
        </div>
      </div>
      <div className="Cal_right">
        <img src="images/img_homepage_special_product_600x.png"></img>
      </div>
    </div>
  );
};
export default Calculate;
