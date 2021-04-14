import playGame from '../index.js';
import getRandomIndex from '../randomNum.js';

const generateGameData = (answer, randomIndexesParam) => {
  const nums = [35, 16, 4, 10, 25, 11, 7];
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
  const gameData = [randomIndexes, expression, result];
  if (result === Number(answer)) {
    gameData.unshift(true);
  } else {
    gameData.unshift(false);
  }
  return gameData;
};

const сalculateNums = () => {
  const question = 'What is the result of the expression?';
  return [question, generateGameData];
};

const startGame = () => {
  playGame(сalculateNums());
};

export default startGame;
