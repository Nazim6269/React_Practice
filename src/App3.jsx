import React, { useState } from "react";
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
          {histories.length === 0 ? (
            <p>There is no history</p>
          ) : (
            histories.map((item) => {
              return (
                <ul key={item.id}>
                  <li>
                    <p>
                      Operation: {item.inputs.a} {item.operator} {item.inputs.b}
                      , Result:
                      {item.res}
                    </p>
                    <span>
                      {item.createdAt.toLocaleDateString()}
                      {"::"}
                      {item.createdAt.toLocaleTimeString()}
                    </span>
                    <br />
                    <button
                      className={style.btn}
                      onClick={() => handleHistory(item)}
                    >
                      Reset
                    </button>
                  </li>
                </ul>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default App3;
