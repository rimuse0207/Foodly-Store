import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";

import ShowDetail from "./SHowDetail";
type DataList = {
  id: number;
  Products: any;
  img: any;
  name: string;
  price: number;
  Description: number;
};
const ShowItem: React.FC = (
  props: RouteComponentProps<{ key: string; name: number }>
) => {
  const data = useSelector((state: RootState) => {
    return state;
  });
  // const daaa = data.getData.DataList.filter((list) => {
  //   return list.id.includes(props.match.params.name);
  // });

  const daaa = data.getData.DataList.filter((list) => {
    if (list.name === props.match.params.name) {
      return list;
    }
  });

  return (
    <div>
      <ShowDetail images={daaa[0].img}></ShowDetail>
    </div>
  );
};

export default ShowItem;
