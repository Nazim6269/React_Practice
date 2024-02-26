import React from "react";
import Child from "./Child";

const Parent = () => {
  console.log("parent is rendering");
  return (
    <div>
      Parent
      <Child />
    </div>
  );
};

export default Parent;
