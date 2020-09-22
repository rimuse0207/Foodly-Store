import React from "react";
import "../Css/Menu.css";
import { Link } from "react-router-dom";
const Menu: React.FC = () => {
  return (
    <div id="menuToggle">
      <input type="checkbox" id="hamburger" />
      <label htmlFor="hambuger" className="LABAL">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div id="Menu">
        <ul>
          <li>
            <Link to="/Homepage1">Home +</Link>
            <ul>
              <li>
                <Link to="/Homepage1">Home Page v1</Link>
              </li>
              <li>
                <Link to="/Homepage2">Home Page v2</Link>
              </li>
              <li>
                <a href="">Home Page v3</a>
              </li>
              <li>
                <a href="">Home Page v4</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/Products">Products +</Link>
            <ul>
              <li>
                <Link to="/Products/Fresh">FRESH</Link>
              </li>
              <li>
                <Link to="/Products/Frozen">FROZEN</Link>
              </li>
              <li>
                <Link to="/Products/Dried">DRIED</Link>
              </li>
              <li>
                <Link to="/Products/Liquid">LIQUID</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/Recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/Pages">Pages +</Link>
            <ul>
              <li>
                <a href="">About As</a>
              </li>
              <li>
                <a href="">Lookbook</a>
              </li>
              <li>
                <a href="">Landing</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="Login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
