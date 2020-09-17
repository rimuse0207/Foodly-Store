import React from "react";
import "../Css/Introduce.css";

const Introduce: React.FC = () => {
  const fristBlog = require("../asset/blog/blog_about_us_01_seeds_large.png");
  const secondBlog = require("../asset/blog/blog_about_us_02_plants_large.png");
  const ThirdBlog = require("../asset/blog/blog_about_us_03_harvest_large.png");

  return (
    <div className="wrapp">
      <div className="Intro">
        <input type="radio" name="radio-btn" id="img1" checked></input>
        <input type="radio" name="radio-btn" id="img2" checked></input>
        <input type="radio" name="radio-btn" id="img3" checked></input>
        <h2>DISCOVER & ORIGIN</h2>
        <div className="slide-container" id="one">
          <div className="left">
            <div>
              <strong>Hand-picked seeds</strong>
              <em>
                Every type of seeds is sorted carefully via our proven method to
                choose the best one with exptional quality index to be strong
                and enduring
              </em>
            </div>
          </div>
          <div className="right">
            <img src={fristBlog} />
          </div>

          <label htmlFor="img3" className="prev">
            Prev
          </label>
          <label htmlFor="img2" className="next">
            Next
          </label>
        </div>
        <div className="slide-container" id="two">
          <div className="left">
            <div>
              <strong>Planting & growth with Love</strong>
              <em>
                Every member of our family is dedicated to particular type of
                plants and everyone is pationated about its growth period taking
                care during it to get the best possible harvest.
              </em>
            </div>
          </div>
          <div className="right">
            <img src={secondBlog} />
          </div>
          <label htmlFor="img1" className="prev">
            Prev
          </label>
          <label htmlFor="img3" className="next">
            Next
          </label>
        </div>
        <div className="slide-container" id="three">
          <div className="left">
            <div>
              <strong>Meticilous harvest process</strong>
              <em>
                A lot of efforts is put into last pre-harvest and harvest
                seasons to gather as much products as possible elliminating any
                demange to the final product
              </em>
            </div>
          </div>
          <div className="right">
            <img src={ThirdBlog} />
          </div>
          <label htmlFor="img2" className="prev">
            Prev
          </label>
          <label htmlFor="img1" className="next">
            Next
          </label>
        </div>
        <div className="Navigation">
          <label className="dots" id="dot1" htmlFor="img1"></label>
          <label className="dots" id="dot2" htmlFor="img2"></label>
          <label className="dots" id="dot3" htmlFor="img3"></label>
        </div>
      </div>
    </div>
  );
};
export default Introduce;
