import React, { useState } from "react";
import "../Css/Header.css";

type ImgProps = {
  images: any;
};

const Header: React.FC<ImgProps> = ({ images }) => {
  const [ClickOn, setClickOn] = useState<string>("Tomato");
  console.log(images);
  const tomato = require("../asset/img_thumb_homepage_slide_1_3646b5c7-695e-4d0f-9e50-3c90ef410fbf_150x.jpg");
  const paper = require("../asset/img_thumb_homepage_slide_2_0e49cdfc-a372-4dd9-a54a-1ac37bcd648a_150x.jpg");
  const apple = require("../asset/img_thumb_homepage_slide_3_7d484d7e-7ff3-4e10-b498-a27b89910779_150x.jpg");
  const Tomato = () => {
    return (
      <li className="TOMATO">
        <div>
          <div>
            <a>
              <h2>TOMATO SEASON</h2>
            </a>
            <h3>
              <a href="">
                <em>nutritious delicious</em>
              </a>
            </h3>
          </div>
          <div className="towerDesc">
            <a href="">
              <span>$3.05</span>
              <em>start Point</em>
            </a>
          </div>
        </div>
      </li>
    );
  };

  const Paper = () => {
    return (
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
    );
  };
  const Apple = () => {
    return (
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
    </>
  );
};

export default Header;
