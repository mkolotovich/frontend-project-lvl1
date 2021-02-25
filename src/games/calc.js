const isCalculateNumCorrect = (index, index1, index2, answer) => {
  const arr = [35, 16, 4, 10, 25, 11, 7];
  const question = 'What is the result of the expression?';
  const sum = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mult = (a, b) => a * b;
  const signs = ['+', '-', '*'];
  const actions = [sum, sub, mult];
  let result;
  if (index2 !== undefined) {
    result = actions[index2](arr[index], arr[index1]);
  }
  const expression = `${arr[index]} ${signs[index2]} ${arr[index1]}`;
  if (result === Number(answer)) {
    return [true, question, expression, arr];
  }
  return [false, question, expression, arr, result];
};

export default isCalculateNumCorrect;
