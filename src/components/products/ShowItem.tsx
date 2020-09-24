import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
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
  console.log(daaa);
  return <div>{daaa[0].name}asdasdasdasd</div>;
};

export default ShowItem;
