import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Css/Products.css";
type Prodcutss = {
  id: number;
  img: string;
  title: string;
};
const Products: React.FC = () => {
  const [Productss, setProductss] = useState<Prodcutss[]>([
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

  return (
    <div className="Products">
      <h2>PRODUCT COLLECTIONS</h2>
      <ul>
        {Productss.map((list) => {
          return (
            <li key={list.id}>
              <Link to={`/Products/${list.title}`}>
                <div>
                  <img src={require(`../../asset/Products/${list.img}`)}></img>
                </div>
                <span>{list.title}</span>
              </Link>
              <div className="colorChangeHover"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
