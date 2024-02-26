import React, { useState } from "react";

const Child = () => {
  const [count, setCount] = useState(0);
  console.log("child is rendering");
  return <div>Count:{count}</div>;
};

export default Child;
