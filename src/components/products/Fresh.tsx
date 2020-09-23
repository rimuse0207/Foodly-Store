import React from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../modules/data";
import { RootState } from "../../modules";
import "../../Css/Products.css";

type Items = {
  id: number;
  Products: any;
  img: any;
  name: string;
  price: number;
  Description: string;
};

const Fresh: React.FC = (props: RouteComponentProps<{ key: string }>) => {
  const data = useSelector((state: RootState) => {
    return state;
  });
  const daaa = data.getData.DataList.filter((list) => {
    return list.Products.indexOf(props.match.params.key) > -1;
  });

  console.log(data);
  return (
    <div className="Products">
      <h2>{props.match.params.key}</h2>
      <span>{daaa.length} products in collection</span>
      <ul>
        {daaa.map((list) => {
          return (
            <li style={{ marginBottom: "60px" }} key={list.id}>
              <Link to="ShowItem">
                <div>
                  <img
                    className="imgss"
                    style={{
                      backgroundImage: `url(${require(`../../asset/Products/${list.img[0]}`)})`,
                      width: "100%",
                      height: "100%",
                      right: "0",
                      left: "0",
                      top: "0",
                    }}
                  ></img>
                </div>
                <span style={{ height: "30px" }}>{list.name}</span>
                <em style={{ color: "gray" }}>
                  Harvest 2015 | In stock | Bunch
                </em>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Fresh;
