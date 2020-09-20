import React from "react";
import "../../Css/Blog.css";
const Recipes: React.FC = () => {
  const FirstImage = require("../../asset/Recipes/Plum_Freezer_Jam_with_Cardamon_and_Ginger_large.png");
  const SecondImage = require("../../asset/Recipes/Risotto_with_Kale_Pesto_large.png");
  const ThirdImage = require("../../asset/Recipes/pasta-pomodoro-with-shrimp-horiz-a-800_grande_99f8f7fb-8733-41b3-82db-3e2641572e56_large.jpg");
  const FothImage = require("../../asset/Recipes/Spinach-Puffs_large.jpg");
  const FiveImage = require("../../asset/Recipes/Pasta_with_Swordfish_and_Cherry_Tomato_Sauce_large.png");
  return (
    <div className="Blogs">
      <h2>RECIPES</h2>
      <em>with love from the bottom of Foodlyheart</em>
      <div className="Blog">
        <div>
          <img src={FirstImage}></img>
          <strong>Plum Freezer Jam with Cardamon and Ginger</strong>
          <span>February 23, 2016</span>
          <em>
            Neither long simmering nor heat-canned, this vibrant, lightly spiced
            jam couldn't be simpler to prepare. Red-fleshed plums lend a
            gorgeous garnet color, but any variety works well.
          </em>
          <span>by Ann Reed</span>
        </div>
      </div>
      <div className="Blog">
        <div>
          <img src={SecondImage}></img>
          <strong>Oven Risotto with Kale Pesto</strong>
          <span>February 23, 2016</span>
          <em>
            If you have a ton of kale at home, this is a great use for it. This
            combination of rice and kale make them perfect candidates for a
            gorgeous veggie dinner.
          </em>
          <span>by Ann Reed</span>
        </div>
      </div>
      <div className="Blog">
        <div>
          <img src={ThirdImage}></img>
          <strong>Pasta Pomodoro with Shrimp</strong>
          <span>February 23, 2016</span>
          <em>
            What’s your go-to quick midweek meal? Shrimps should be on your
            quick meal list. Tossing them with quickly cooked fresh tomatoes,
            garlic, and basil, the way how you get excellent filling to your
            pasta.
          </em>
          <span>by Ann Reed</span>
        </div>
      </div>
      <div className="Blog">
        <div>
          <img src={FothImage}></img>
          <strong>Spinach Puffs</strong>
          <span>February 23, 2016</span>
          <em>
            Serve these little spinach pies with a main course as your vegetable
            side and dinner roll in one, or eat a couple for a vegetarian
            dinner—they're that good.
          </em>
          <span>by Ann Reed</span>
        </div>
      </div>
      <div className="Blog">
        <div>
          <img src={FiveImage}></img>
          <strong>Pasta with Swordfish and Cherry Tomato Sauce</strong>
          <span>February 23, 2016</span>
          <em>
            This recipe is the epitome of Sicily with the swordfish, pine nuts,
            and golden raisins. It is fun to make and even better to eat taking
            you to Sicily island.
          </em>
          <span>by Ann Reed</span>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
