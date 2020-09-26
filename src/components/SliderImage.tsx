import React from "react";
import "../Css/SliderImage.css";
import { Link } from "react-router-dom";

const SliderImage: React.FC = () => {
  const basil = require("../asset/vegi/Basil_grande.jpeg");
  const Brandywine_tomatoes = require("../asset/vegi/Brandywine-tomatoes-front_grande.jpeg");
  const grande = require("../asset/raspberries_ed450429-f3d8-4757-9507-f18101c2c057_grande.jpeg");
  const Campari_Tomatoes = require("../asset/vegi/Campari-Tomatoes_grande.jpeg");
  return (
    <div className="Sliders">
      <ul>
        <Link to="/Products/Fresh/Basil">
          <li
            style={{
              backgroundImage: `url(${basil})`,
            }}
          >
            <span>$2.29</span>
            <div>Basil</div>
            <div>
              <span>Harvest2015 | In stock | kg</span>
            </div>
          </li>
        </Link>
        <Link to="/Products/Fresh/Brandywine Tomatoes">
          <li
            style={{
              backgroundImage: `url(${Brandywine_tomatoes})`,
            }}
          >
            <span>$8.05</span>
            <div>Brandywine Tomatoes</div>
            <div>
              <span>Harvest2015 | In stock | kg</span>
            </div>
          </li>
        </Link>
        <Link to="/Products/Fresh/Raspberries">
          <li
            style={{
              backgroundImage: `url(${grande})`,
            }}
          >
            <span>$12.00</span>
            <div>C-OVERLOAD</div>
            <div>
              <span>Harvest2015 | In stock | kg</span>
            </div>
          </li>
        </Link>
        <Link to="/Products/Fresh/Campari Tomatoes">
          <li
            style={{
              backgroundImage: `url(${Campari_Tomatoes})`,
            }}
          >
            <span>$11.00</span>
            <div>Campari Tomatoes</div>
            <div>
              <span>Harvest2015 | In stock | kg</span>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SliderImage;
