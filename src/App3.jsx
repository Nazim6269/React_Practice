import React, { useState } from "react";
import HistorySection from "./Components/history/HistorySection";
import InputSection from "./Components/inputSection/InputSection";
import OperationSection from "./Components/operationSection/OperationSection";
import style from "./app3.module.css";
import { generateId } from "./utils/generateId";
import { operationTwo } from "./utils/operation";

//initial state
const initialState = {
  a: 0,
  b: 0,
};

const getId = generateId(); // generator function must be called once

const App3 = () => {
  const [inputState, setInputState] = useState({ ...initialState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);

  const handleInputChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleClick = (operator) => {
    const res = operationTwo(inputState, operator);
    setResult(res);

    const history = {
      id: getId.next().value,
      inputs: inputState,
      res,
      createdAt: new Date(),
      operator,
    };

    setHistories([history, ...histories]);
    setInputState({ ...initialState });
  };

  const handleClearOps = () => {
    setInputState({ ...initialState });
    setResult(0);
  };

  const handleHistory = (his) => {
    setInputState({ ...his.inputs });
    setResult(his.res);
  };

  return (
    <div className={style.card}>
      <h1 className={style.heading}>Calculator</h1>
      <h2>Result: {result}</h2>

      {/* input section */}
      <InputSection
        inputState={inputState}
        handleInputChange={handleInputChange}
      />
      <div>
        {/* {operation section} */}
        <OperationSection
          handleClearOps={handleClearOps}
          handleClick={handleClick}
          style={style}
        />
      </div>
      <HistorySection
        histories={histories}
        style={style}
        handleHistory={handleHistory}
      />
    </div>
  );
};

export default App3;
