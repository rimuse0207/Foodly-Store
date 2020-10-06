import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";

import ShowDetail from "./SHowDetail";

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
  return (
    <div>
      <ShowDetail
        images={daaa[0].img}
        name={daaa[0].name}
        price={daaa[0].price}
        desc={daaa[0].Description}
      ></ShowDetail>
    </div>
  );
};

export default ShowItem;
