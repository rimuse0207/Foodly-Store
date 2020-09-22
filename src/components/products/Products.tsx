import React, { useState } from "react";
import "../../Css/Products.css";
type Prodcutss = {
  id: number;
  img: string;
  title: string;
};
const Products: React.FC = () => {
  const [productss, setProductss] = useState([
    {
      id: 1,
      img: "collection_01_all_large (1).jpeg",
      title: "All products",
    },
    {
      id: 2,
      img: "collection_02_fresh_small.png",
      title: "Fresh",
    },
    {
      id: 3,
      img: "collection_03_frozen_small.png",
      title: "Frozen",
    },
    {
      id: 4,
      img: "collection_04_dried_small.png",
      title: "Dried",
    },
    {
      id: 5,
      img: "collection_05_liquid_small.png",
      title: "Liquid",
    },
    {
      id: 6,
      img: "collection_06_sale_large.png",
      title: "Sale",
    },
    {
      id: 7,
      img: "collection_07_specials_large.png",
      title: "Specials",
    },
    {
      id: 8,
      img: "collection_08_cooked_large.png",
      title: "Cooked",
    },
  ]);
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
        {productss.map((list) => {
          return (
            <li key={list.id}>
              <a href="">
                <div>
                  <img src={require(`../../asset/Products/${list.img}`)}></img>
                </div>
                <span>{list.title}</span>
              </a>
              <div className="colorChangeHover"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
