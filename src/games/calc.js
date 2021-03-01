const isCalculateNumCorrect = (firstNum, secondNum, index2, actions, answer) => {
  let result;
  if (index2 !== undefined) {
    result = actions[index2](firstNum, secondNum);
  }
  if (result === Number(answer)) {
    return [true, result];
  }
  return [false, result];
};

const CalculateNums = (index, index1, index2, answer) => {
  const arr = [35, 16, 4, 10, 25, 11, 7];
  const actions = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, ['+', '-', '*']];
  const expression = `${arr[index]} ${actions[3][index2]} ${arr[index1]}`;
  return [isCalculateNumCorrect(arr[index], arr[index1], index2, actions, answer)[0],
    expression, arr, isCalculateNumCorrect(arr[index], arr[index1], index2, actions, answer)[1]];
};

export default CalculateNums;
