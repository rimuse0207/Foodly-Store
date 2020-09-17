import React from "react";
import "../Css/Nav.css";

const Nav: React.FC = () => {
  const logo = require("../asset/logo_81149f76-33f4-4e96-9653-e9b0474902fe_x96.png");
  return (
    <div className="Nav">
      <div>Organic food by Whytes'</div>
      <a>
        <img src={logo}></img>
      </a>
      <div>from Manitoba, Canada</div>
    </div>
  );
};

export default Nav;
