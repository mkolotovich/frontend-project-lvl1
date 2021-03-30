import playGame from '../index.js';

const isCalculateNumRight = (firstNum, secondNum, sign, actions, answer) => {
  let result;
  if (sign !== undefined) {
    result = actions[sign](firstNum, secondNum);
  }
  if (result === Number(answer)) {
    return [true, result];
  }
  return [false, result];
};

const CalculateNums = (indexForFirstNum, indexForSecondNum, sign, answer) => {
  const nums = [35, 16, 4, 10, 25, 11, 7];
  const question = 'What is the result of the expression?';
  const actions = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, ['+', '-', '*']];
  const signs = actions[3];
  const expression = `${nums[indexForFirstNum]} ${signs[sign]} ${nums[indexForSecondNum]}`;
  return [
    isCalculateNumRight(nums[indexForFirstNum], nums[indexForSecondNum], sign, actions, answer)[0],
    CalculateNums, nums, question, expression, signs,
    isCalculateNumRight(nums[indexForFirstNum], nums[indexForSecondNum], sign, actions, answer)[1]];
};

const startGame = () => {
  playGame(CalculateNums());
};

export default startGame;
