import React from "react";
import "../../Css/Pages.css";
import Introduce from "../Introduce";
const Pages: React.FC = () => {
  const FirstImage = require("../../asset/Pagess/about_us_01_large.jpg");
  const SecondImage = require("../../asset/Pagess/about_us_02_large.jpg");
  const ThirdImage = require("../../asset/Pagess/about_us_03_large.jpg");
  return (
    <div style={{ backgroundColor: "#F2F3F5" }}>
      <div className="Pages">
        <h2>OUR STORY</h2>
        <span className="Pages_span">
          with love from the bottom of Foddly heart
        </span>
        <p>
          At Foodly, we believe that all people should have access to fresh,
          healthy, and affordable food. For us going organic is not a fancy
          trend that many of gigantic producers see in healthy nutrition, it's
          about passion, love, and respect to nature and people around. This
          passion is what drives our family to grow different cultivars of
          fruits and vegetables for several generations so far.
        </p>
        <span>Our family is mainly focused on:</span>
        <ul>
          <li>seeds selection according to taste and nutrition values</li>
          <li>growing fruits and vegetables on own fields and orchards</li>
          <li>
            harmless reservation of products (as frozen, dried and liquid)
          </li>
          <li>cooking homemade jams, marmalades and seasonings</li>
          <li>exploring new recipes for our products</li>
        </ul>
        <p>
          All this can't be done without a sincere devotion of each member of
          our family. William and Stacey Whyte are the ones who are at the roots
          of every new growth season rigorously watching and controlling every
          stage of how our products is growing. Marie and Tatya are always there
          to help with caring the plants from seeds to ripe fruits. Marshall,
          Sonia, and Ellie are specially founded with experiments on the Whyte's
          kitchen making new spice mixes and sauces. If we are not sharing the
          same blood, but perceive ourselves as a family by beliefs and values.{" "}
        </p>
      </div>
      <Introduce></Introduce>
      <div className="Pages">
        <p>
          All of Foodly fruits, vegetables, and herbs are grown using
          sustainable growing methods. This is our one of the main tenants
          within the crew. Sustainable agriculture is the practice of growing
          food in a way that preserves and enhances the environment, provides
          economic opportunity and good health for individuals and communities,
          and connects people to the land around them. We do not use chemical
          fertilizers or pesticides and distribute our food only to local
          communities nearby so Foodly products stay fresh and healthy.
        </p>
        <ul className="Pages_Image">
          <li>
            <img src={FirstImage}></img>
          </li>
          <li>
            <img src={SecondImage}></img>
          </li>
          <li>
            <img src={ThirdImage}></img>
          </li>
        </ul>
        <p>
          Instead, we use biological control methods to be sure of our products
          safety. In order to control pests, beneficial bugs are introduced into
          the crop. This is a natural alternative to using harmful chemicals.
          Using biological control methods leaves a smaller impact to the
          environment and allowing us be a progressive organic farm. Relying on
          the traditions, we have built a sustainable production of products
          with high nutrition value and safety for you health combining the
          principles of our ancestors and innovative approaches of the young
          generation. We are proud of our roots, but are always looking to grow
          like our dear plants ;) If you have any question you may drop us a
          line.
        </p>
      </div>
    </div>
  );
};

export default Pages;
