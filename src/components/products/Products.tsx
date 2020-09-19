import React from "react";
import "../../Css/Products.css";

const Products: React.FC = () => {
  const All_products = require("../../asset/Products/collection_01_all_large (1).jpeg");
  const Fresh = require("../../asset/Products/collection_02_fresh_small.png");
  const Frozen = require("../../asset/Products/collection_03_frozen_small.png");
  const Dried = require("../../asset/Products/collection_04_dried_small.png");
  const Liquid = require("../../asset/Products/collection_05_liquid_small.png");
  const Sale = require("../../asset/Products/collection_06_sale_large.png");
  const Specials = require("../../asset/Products/collection_07_specials_large.png");
  const Cooked = require("../../asset/Products/collection_08_cooked_large.png");

  return (
    <div className="Products">
      <h2>PRODUCT COLLECTIONS</h2>
      <ul>
        <li>
          <a href="">
            <div>
              <img src={All_products}></img>
            </div>
            <span>All products</span>
          </a>
          <div className="colorChangeHover"></div>
        </li>
        <li>
          <a href="">
            <div>
              <img src={Fresh}></img>
            </div>
            <span>Fresh</span>
          </a>
        </li>
        <li>
          <a href="">
            <div>
              <img src={Frozen}></img>
            </div>
            <span>Frozen</span>
          </a>
        </li>
        <li>
          <a href="">
            <div>
              <img src={Dried}></img>
            </div>
            <span>Dried</span>
          </a>
        </li>
        <li>
          <a href="">
            <div>
              <img src={Liquid}></img>
            </div>
            <span>Liquid</span>
          </a>
        </li>
        <li>
          <a href="">
            <div>
              <img src={Sale}></img>
            </div>
            <span>Sale</span>
          </a>
        </li>
        <li>
          <a href="">
            <div>
              <img src={Specials}></img>
            </div>
            <span>Specials</span>
          </a>
        </li>
        <li>
          <a href="">
            <div>
              <img src={Cooked}></img>
            </div>
            <span>Cooked</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Products;
