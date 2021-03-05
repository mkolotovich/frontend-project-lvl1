import playGame from '../index.js';

const isCalculateNumCorrect = (firstNum, secondNum, sign, actions, answer) => {
  let result;
  if (sign !== undefined) {
    result = actions[sign](firstNum, secondNum);
  }
  if (result === Number(answer)) {
    return [true, result];
  }
  return [false, result];
};

const CalculateNums = (indexforFirstNum, indexforSecondNum, sign, answer) => {
  const arr = [35, 16, 4, 10, 25, 11, 7];
  const question = 'What is the result of the expression?';
  const actions = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, ['+', '-', '*']];
  const signs = actions[3];
  const expression = `${arr[indexforFirstNum]} ${signs[sign]} ${arr[indexforSecondNum]}`;
  return [
    isCalculateNumCorrect(arr[indexforFirstNum], arr[indexforSecondNum], sign, actions, answer)[0],
    CalculateNums, arr, signs, expression,
    isCalculateNumCorrect(arr[indexforFirstNum], arr[indexforSecondNum], sign, actions, answer)[1],
    question];
};

export default CalculateNums;

playGame(CalculateNums());
