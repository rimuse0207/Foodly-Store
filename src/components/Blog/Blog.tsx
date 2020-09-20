import React from "react";
import "../../Css/Blog.css";
const Blog: React.FC = () => {
  const FirstImage = require("../../asset/blog/blog_news_02_large.jpg");
  const SecondImage = require("../../asset/blog/blog_news_01_large.jpg");
  const ThirdImage = require("../../asset/blog/article_01_large.jpg");
  return (
    <div className="Blogs">
      <h2>BLOG</h2>
      <em>with love from the bottom of Foodlyheart</em>
      <div className="Blog">
        <div>
          <img src={FirstImage}></img>
          <strong>What We Got This Fall</strong>
          <span>February 23, 2016</span>
          <em>
            Happy harvesting time with huge expectations for the next season.
            Harvest is the process of gathering ripe crops from the fields.
            Reaping is the cutting of grain or pulse for harvest, typically
            using a scythe, sickle, or reaper.
          </em>
          <span>by Ann Reed</span>
        </div>
      </div>
      <div className="Blog">
        <div>
          <img src={SecondImage}></img>
          <strong>Apple Harvest 2015</strong>
          <span>February 23, 2016</span>
          <em>
            In the Foodly Kitchen, we’re partial to McIntosh and Granny Smith
            for baking. When the softer McIntosh mixes with the more toothsome
            Granny Smith, presto! You’ve got yourself the perfect apple pie.
          </em>
          <span>by Ann Reed</span>
        </div>
      </div>
      <div className="Blog">
        <div>
          <img src={ThirdImage}></img>
          <strong>Raspberries Harvest 2015</strong>
          <span>February 23, 2016</span>
          <em>
            We started growing raspberries in 90’s on our family farm near
            Cupar. Our cultivar has exeptional sweet taste with astringent
            flavor. These individually gathered berries are a wonderful taste of
            summer in your everyday meal. Raspberries are perfect in smoothies,
            baking, on pancakes or just plain old snacking out of the bag!
            Enjoy!
          </em>
          <span>by Ann Reed</span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
