import React, { useState } from "react";
import style from "./app3.module.css";
import { operationTwo } from "./utils/operation";

//initial state
const initialState = {
  a: 0,
  b: 0,
};

const App3 = () => {
  const [inputState, setInputState] = useState({ ...initialState });
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleClick = (operator) => {
    setResult(operationTwo(inputState, operator));
    setInputState({ ...initialState });
  };

  const handleClearOps = () => {
    setInputState({ ...initialState });
    setResult(0);
  };

  return (
    <div className={style.card}>
      <h1 className={style.heading}>Calculator</h1>
      <h2>Result: {result}</h2>
      <div>
        <h3>Enter inputs: </h3>
        <input
          type="number"
          name="a"
          value={inputState.a}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="b"
          value={inputState.b}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <h3>Choose operation</h3>
        <div className={style.btnGroup}>
          <button className={style.btn} onClick={() => handleClick("+")}>
            +
          </button>
          <button className={style.btn} onClick={() => handleClick("-")}>
            -
          </button>
          <button className={style.btn} onClick={() => handleClick("*")}>
            *
          </button>
          <button className={style.btn} onClick={() => handleClick("/")}>
            /
          </button>
          <button className={style.btn} onClick={handleClearOps}>
            Clear
          </button>
        </div>
        <div>
          <h2>History</h2>
          <p>There is no history</p>
        </div>
      </div>
    </div>
  );
};

export default App3;
