import React from "react";
type GreetingsProps = {
  list: any;
};
const ShowItem: React.FC<GreetingsProps> = ({ list }) => {
  console.log(list);
  return <div>{list}</div>;
};

export default ShowItem;
