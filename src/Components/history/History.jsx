import React from "react";

const History = ({ item, inputState }) => {
  const handleHistory = (history) => {
    console.log(history);
  };
  return (
    <div>
      <p>
        operation: {item.inputs.a} {item.operator} {item.inputs.b}, Result:
        {item.res}
      </p>
      <span>
        {item.createdAt.toLocaleDateString()}
        {"::"}
        {item.createdAt.toLocaleTimeString()}
      </span>
      <br />
      <button onClick={() => handleHistory(item.inputs)}>Reset</button>
    </div>
  );
};

export default History;
