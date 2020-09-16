import { url } from "inspector";
import React from "react";
import "../Css/SliderImage.css";

const SliderImage = () => {
  return (
    <div className="Sliders">
      <ul>
        <li
          style={{ backgroundImage: 'url("/images/vegi/Basil_grande.jpeg")' }}
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
            backgroundImage:
              'url("/images/vegi/Brandywine-tomatoes-front_grande.jpeg")',
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
            backgroundImage:
              'url("/images/raspberries_ed450429-f3d8-4757-9507-f18101c2c057_grande.jpeg")',
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
            backgroundImage: 'url("/images/vegi/Campari-Tomatoes_grande.jpeg")',
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
