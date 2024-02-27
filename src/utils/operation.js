export const operation = (inputState, operator) => {
  switch (operator) {
    case "+":
      return inputState.a + inputState.b;
    case "-":
      return inputState.a - inputState.b;
    case "*":
      return inputState.a * inputState.b;
    case "/":
      return inputState.a / inputState.b;
    default:
      break;
  }
};

//Dynamic function for arithmetic operation
export const operationTwo = (inputState, operator) => {
  const myFunc = new Function(
    "operator",
    `return ${inputState.a} ${operator} ${inputState.b}`
  );
  return myFunc(operator);
};
