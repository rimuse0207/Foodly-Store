import React, { useState } from "react";
import SliderImage from "./../SliderImage";
import MainImage from "./../MainImage";
import { Link } from "react-router-dom";
import Calculate from "./../Calculate";
import Introduce from "./../Introduce";
import "../../Css/Header.css";

const Homepage1: React.FC = () => {
  const [ClickOn, setClickOn] = useState<string>("Tomato");
  const tomato = require("../../asset/img_thumb_homepage_slide_1_3646b5c7-695e-4d0f-9e50-3c90ef410fbf_150x.jpg");
  const paper = require("../../asset/img_thumb_homepage_slide_2_0e49cdfc-a372-4dd9-a54a-1ac37bcd648a_150x.jpg");
  const apple = require("../../asset/img_thumb_homepage_slide_3_7d484d7e-7ff3-4e10-b498-a27b89910779_150x.jpg");
  const Tomato = () => {
    return (
      <Link to="/Products/Fresh/Campari Tomatoes">
        <li className="TOMATO">
          <div>
            <div>
              <Link to="/Products/Fresh/Brandywine Tomatoes">
                <h2>TOMATO SEASON</h2>
              </Link>
              <h3>
                <Link to="/Products/Fresh/Brandywine Tomatoes">
                  <em>nutritious delicious</em>
                </Link>
              </h3>
            </div>
            <div className="towerDesc">
              <Link to="/Products/Fresh/Brandywine Tomatoes">
                <span>$3.05</span>
                <em>start Point</em>
              </Link>
            </div>
          </div>
        </li>
      </Link>
    );
  };

  const Paper = () => {
    return (
      <Link to="/Products/Fresh/Capia Pepper">
        <li className="PELLA">
          <div>
            <div>
              <a>
                <h2>PAELLA OR PASTA?</h2>
              </a>
              <h3>
                <a href="">
                  <em>you'll need this sweet pepper for both</em>
                </a>
              </h3>
            </div>
            <div className="towerDesc">
              <a href="">
                <span>$6.95</span>
                <em>start Point</em>
              </a>
            </div>
          </div>
        </li>
      </Link>
    );
  };
  const Apple = () => {
    return (
      <Link to="/Products/Fresh/Empire Apples">
        <li className="APPLE">
          <div>
            <div>
              <a>
                <h2>APPLE PIE?</h2>
              </a>
              <h3>
                <a href="">
                  <em>of Gala Cultivar</em>
                </a>
              </h3>
            </div>
            <div className="towerDesc">
              <a href="">
                <span>$3.55</span>
                <em>start Point</em>
              </a>
            </div>
          </div>
        </li>
      </Link>
    );
  };
  const handleClick = (text: string) => {
    setClickOn(text);
  };
  return (
    <>
      <div className="Header">
        {/* <Nav></Nav>
      <Menu></Menu> */}
        <ul className="slides">
          {ClickOn === "Tomato" ? <Tomato></Tomato> : <div></div>}
          {ClickOn === "Paper" ? <Paper></Paper> : <div></div>}
          {ClickOn === "Apple" ? <Apple></Apple> : <div></div>}
        </ul>
        <ol className="navcontrol">
          <li
            className={ClickOn === "Tomato" ? "on" : ""}
            onClick={(e) => handleClick("Tomato")}
          >
            <img src={tomato}></img>
          </li>
          <li
            className={ClickOn === "Paper" ? "on" : ""}
            onClick={(e) => handleClick("Paper")}
          >
            <img src={paper}></img>
          </li>
          <li
            className={ClickOn === "Apple" ? "on" : ""}
            onClick={(e) => handleClick("Apple")}
          >
            <img src={apple}></img>
          </li>
        </ol>
      </div>
      <MainImage></MainImage>
      <SliderImage></SliderImage>
      <Calculate></Calculate>
      <Introduce></Introduce>
    </>
  );
};

export default Homepage1;
