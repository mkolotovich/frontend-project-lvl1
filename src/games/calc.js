const isCalculateNumCorrect = (arr, index, index1, index2, firstNum, secondNum, answer) => {
  const sum = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mult = (a, b) => a * b;
  const signs = ['+', '-', '*'];
  const actions = [sum, sub, mult];
  const result = actions[index2](firstNum, secondNum);
  const expression = `${arr[index]} ${signs[index2]} ${arr[index1]}`;
  if (result === Number(answer)) {
    return [true, result];
  }
  return [false, result, expression];
};

export default isCalculateNumCorrect;
