import React from "react";
import "../Css/SliderImage.css";

const SliderImage: React.FC = () => {
  const basil = require("../asset/vegi/Basil_grande.jpeg");
  const Brandywine_tomatoes = require("../asset/vegi/Brandywine-tomatoes-front_grande.jpeg");
  const grande = require("../asset/raspberries_ed450429-f3d8-4757-9507-f18101c2c057_grande.jpeg");
  const Campari_Tomatoes = require("../asset/vegi/Campari-Tomatoes_grande.jpeg");
  return (
    <div className="Sliders">
      <ul>
        <li
          style={{
            backgroundImage: `url(${basil})`,
          }}
        >
          <a href=""></a>
          <span>$2.29</span>
          <div>Basil</div>
          <div>
            <span>Harvest2015 | In stock | kg</span>
          </div>
        </li>
        <li
          style={{
            backgroundImage: `url(${Brandywine_tomatoes})`,
          }}
        >
          <a href=""></a>
          <span>$8.05</span>
          <div>Brandywine Tomatoes</div>
          <div>
            <span>Harvest2015 | In stock | kg</span>
          </div>
        </li>
        <li
          style={{
            backgroundImage: `url(${grande})`,
          }}
        >
          <a href=""></a>
          <span>$12.00</span>
          <div>C-OVERLOAD</div>
          <div>
            <span>Harvest2015 | In stock | kg</span>
          </div>
        </li>
        <li
          style={{
            backgroundImage: `url(${Campari_Tomatoes})`,
          }}
        >
          <a href=""></a>
          <span>$11.00</span>
          <div>Campari Tomatoes</div>
          <div>
            <span>Harvest2015 | In stock | kg</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SliderImage;
