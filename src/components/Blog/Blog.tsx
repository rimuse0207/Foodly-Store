import React, { useState } from "react";
import "../../Css/Blog.css";
import "../../conf.d.ts";
type Blogs = {
  id: number;
  img: string;
  title: string;
  date: string;
  description: string;
  writer: string;
};
declare function require(path: string);
const Blog: React.FC = () => {
  const [Blogs, setBlogs] = useState<Blogs[]>([
    {
      id: 1,
      img: "blog/blog_news_02_large.jpg",
      title: "What We Got This Fall",
      date: "February 23, 2016",
      description:
        "Happy harvesting time with huge expectations for the next season.Harvest is the process of gathering ripe crops from the fields.Reaping is the cutting of grain or pulse for harvest, typicallyusing a scythe, sickle, or reaper.",
      writer: "by Ann Reed",
    },
    {
      id: 2,
      img: "blog/blog_news_01_large.jpg",
      title: "Apple Harvest 2015",
      date: "February 23, 2016",
      description:
        "In the Foodly Kitchen, we’re partial to McIntosh and Granny Smithfor baking. When the softer McIntosh mixes with the more toothsomeGranny Smith, presto! You’ve got yourself the perfect apple pie.",
      writer: "by Ann Reed",
    },
    {
      id: 3,
      img: "blog/article_01_large.jpg",
      title: "Raspberries Harvest 2015",
      date: "February 23, 2016",
      description:
        " We started growing raspberries in 90’s on our family farm nearCupar. Our cultivar has exeptional sweet taste with astringentflavor. These individually gathered berries are a wonderful taste ofsummer in your everyday meal. Raspberries are perfect in smoothies,baking, on pancakes or just plain old snacking out of the bag!Enjoy!",
      writer: "by Ann Reed",
    },
  ]);

  return (
    <div className="Blogs">
      <h2>BLOG</h2>
      <em>with love from the bottom of Foodlyheart</em>
      {Blogs.map((list) => {
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

export default Blog;
