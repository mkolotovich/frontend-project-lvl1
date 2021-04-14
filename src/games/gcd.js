import playGame from '../index.js';
import getRandomIndex from '../randomNum.js';

const findGcd = (firstNum, secondNum) => {
  let bigger; let smaller;
  if (firstNum > secondNum) {
    bigger = firstNum; smaller = secondNum;
  } else {
    bigger = secondNum; smaller = firstNum;
  }
  let restOfDivide; let quotient;
  if (bigger !== undefined) {
    do {
      quotient = Math.floor(bigger / smaller);
      restOfDivide = bigger - quotient * smaller;
      bigger = smaller; smaller = restOfDivide;
    }
    while (restOfDivide !== 0);
  }
  return bigger;
};

const generateGameData = (answer, randomIndexesParam) => {
  const nums = [25, 50, 100, 52, 3, 9, 3, 3, 4, 5, 1, 1];
  const randomIndexes = [getRandomIndex(nums), getRandomIndex(nums)];
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
  const [indexForFirstNum, indexForSecondNum] = randomIndexes;
  const expression = `${nums[indexForFirstNum]} ${nums[indexForSecondNum]}`;
  const result = findGcd(nums[indexForFirstNum], nums[indexForSecondNum]);
  const gameData = [randomIndexesClone, expression, result];
  if (result === Number(answer)) {
    gameData.unshift(true);
  } else {
    gameData.unshift(false);
  }
  return gameData;
};

const checkGcd = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  return [question, generateGameData];
};

const startGame = () => {
  playGame(checkGcd());
};

export default startGame;
