import React from "react";
import "../Css/Menu.css";
function Menu() {
  return (
    <div id="Menu">
      <ul>
        <li>
          <a href="">Home +</a>
          <ul>
            <li>
              <a href="">Home Page v1</a>
            </li>
            <li>
              <a href="">Home Page v2</a>
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
          <a href="">Products +</a>
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
          <a href="">Blog</a>
        </li>
        <li>
          <a href="">Recipes</a>
        </li>
        <li>
          <a href="">Pages +</a>
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
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
