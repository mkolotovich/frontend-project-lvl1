import playGame from '../index.js';
import getRandomIndex from '../randomNum.js';

const сalculateNums = (answer, randomIndexesParam) => {
  const nums = [35, 16, 4, 10, 25, 11, 7];
  const question = 'What is the result of the expression?';
  const actions = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, ['+', '-', '*']];
  const [,,, signs] = actions;
  const randomIndexes = [getRandomIndex(nums), getRandomIndex(nums), getRandomIndex(signs)];
  let randomIndexesClone = [];
  if (randomIndexesParam === undefined) {
    randomIndexesClone = randomIndexes.slice();
  } else {
    randomIndexesClone = randomIndexesParam.slice();
  }
  for (let i = 0; i < randomIndexes.length; i += 1) {
    if (randomIndexes[i] !== randomIndexesClone[i]) {
      randomIndexes[i] = randomIndexesClone[i];
    }
  }
  const [indexForFirstNum, indexForSecondNum, sign] = randomIndexes;
  const expression = `${nums[indexForFirstNum]} ${signs[sign]} ${nums[indexForSecondNum]}`;
  const result = actions[sign](nums[indexForFirstNum], nums[indexForSecondNum]);
  if (result === Number(answer)) {
    return [true, сalculateNums, expression, question, randomIndexesClone, result];
  }
  return [false, сalculateNums, expression, question, randomIndexesClone, result];
};

const startGame = () => {
  playGame(сalculateNums());
};

export default startGame;
