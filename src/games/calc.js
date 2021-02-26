const isCalculateNumCorrect = (index, index1, index2, answer) => {
  const arr = [35, 16, 4, 10, 25, 11, 7];
  const question = 'What is the result of the expression?';
  const actions = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, ['+', '-', '*']];
  let result;
  if (index2 !== undefined) {
    result = actions[index2](arr[index], arr[index1]);
  }
  const expression = `${arr[index]} ${actions[3][index2]} ${arr[index1]}`;
  if (result === Number(answer)) {
    return [true, question, expression, arr];
  }
  return [false, question, expression, arr, result];
};

export default isCalculateNumCorrect;
