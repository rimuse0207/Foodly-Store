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
            <Link to="/">Home +</Link>
            <ul>
              <li>
                <Link to="/">Home Page v1</Link>
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
            <a href="/Products">Products +</a>
            <ul>
              <li>
                <a href="">FRESH</a>
              </li>
              <li>
                <a href="">FROZEN</a>
              </li>
              <li>
                <a href="">DRIED</a>
              </li>
              <li>
                <a href="">LIQUID</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/Blog">Blog</a>
          </li>
          <li>
            <a href="/Recipes">Recipes</a>
          </li>
          <li>
            <a href="/Pages">Pages +</a>
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
            <a href="/Contact">Contact</a>
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
