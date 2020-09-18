import React from "react";
import "../../Css/Header.css";
const Homepage2: React.FC = () => {
  const recipe1 = require("../..//asset/food/recipe-1_large.png");
  const recipe2 = require("../..//asset/food/recipe-2_large.png");
  const recipe3 = require("../..//asset/food/recipe-3_large.png");
  const recipe4 = require("../..//asset/food/recipe-4_large.png");
  return (
    <div className="Header">
      <div className="Homepage2">
        <h2>Real Food Projects</h2>
        <p>
          Featuring 39 Skills and 47 Recipes from Scratch, this book will change
          the way you cook.
        </p>
        <span>
          <a>TAKE A LOOK AT BOOK</a>
        </span>
      </div>
      <div className="SubMain">
        <h2>BEST DINNER COURSES</h2>
        <span>
          pick direction you'd like to go further and recieve the list of
          product options
        </span>
        <ul>
          <li>
            <img src={recipe1} />
            <div className="left">
              <span>Countrified Salad</span>
              <span>Ingredient pack from</span>
            </div>
            <div className="right">
              <span>$13.55</span>
            </div>
          </li>
          <li>
            <img src={recipe2} />
            <div className="left">
              <span>Roasted Chicken Salad</span>
              <span>Ingredient pack from</span>
            </div>
            <div className="right">
              <span>$27.75</span>
            </div>
          </li>
          <li>
            <img src={recipe3} />
            <div className="left">
              <span>Beans Salad</span>
              <span>Ingredient pack from</span>
            </div>
            <div className="right">
              <span>$48.67</span>
            </div>
          </li>
          <li>
            <img src={recipe4} />
            <div className="left">
              <span>Spring Salad</span>
              <span>Ingredient pack from</span>
            </div>
            <div className="right">
              <span>$24.89</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Homepage2;
