import React, { useState } from "react";
import "../../Css/Blog.css";
type Recipes = {
  id: number;
  img: string;
  title: string;
  date: string;
  description: string;
  writer: string;
};
const Recipes: React.FC = () => {
  const [Recipes, SetRecipes] = useState<Recipes[]>([
    {
      id: 1,
      img: "Recipes/Plum_Freezer_Jam_with_Cardamon_and_Ginger_large.png",
      title: "Plum Freezer Jam with Cardamon and Ginger",
      date: "February 23, 2016",
      description:
        "Neither long simmering nor heat-canned, this vibrant, lightly spicedjam couldn't be simpler to prepare. Red-fleshed plums lend agorgeous garnet color, but any variety works well.",
      writer: "by Ann Reed",
    },
    {
      id: 2,
      img: "Recipes/Risotto_with_Kale_Pesto_large.png",
      title: "Oven Risotto with Kale Pesto",
      date: "February 23, 2016",
      description:
        "If you have a ton of kale at home, this is a great use for it. Thiscombination of rice and kale make them perfect candidates for agorgeous veggie dinner.",
      writer: "by Ann Reed",
    },
    {
      id: 3,
      img:
        "Recipes/pasta-pomodoro-with-shrimp-horiz-a-800_grande_99f8f7fb-8733-41b3-82db-3e2641572e56_large.jpg",
      title: "Pasta Pomodoro with Shrimp",
      date: "February 23, 2016",
      description:
        "What’s your go-to quick midweek meal? Shrimps should be on yourquick meal list. Tossing them with quickly cooked fresh tomatoes,garlic, and basil, the way how you get excellent filling to yourpasta.",
      writer: "by Ann Reed",
    },
    {
      id: 4,
      img: "Recipes/Spinach-Puffs_large.jpg",
      title: "Spinach Puffs",
      date: "February 23, 2016",
      description:
        " Serve these little spinach pies with a main course as your vegetableside and dinner roll in one, or eat a couple for a vegetariandinner—they're that good.",
      writer: "by Ann Reed",
    },
    {
      id: 5,
      img: "Recipes/Pasta_with_Swordfish_and_Cherry_Tomato_Sauce_large.png",
      title: "Pasta with Swordfish and Cherry Tomato Sauce",
      date: "February 23, 2016",
      description:
        "This recipe is the epitome of Sicily with the swordfish, pine nuts,and golden raisins. It is fun to make and even better to eat takingyou to Sicily island.",
      writer: "by Ann Reed",
    },
  ]);

  return (
    <div className="Blogs">
      <h2>RECIPES</h2>
      <em>with love from the bottom of Foodlyheart</em>
      {Recipes.map((list) => {
        return (
          <div className="Blog" key={list.id}>
            <div>
              <img src={require(`../../asset/${list.img}`)}></img>
              <strong>{list.title}</strong>
              <span>{list.date}</span>
              <em>{list.description}</em>
              <span>{list.writer}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Recipes;
