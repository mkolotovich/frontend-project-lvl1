import playGame from '../index.js';
import getRandomNum from '../randomNum.js';

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

const generateGameData = () => {
  const randomNums = [getRandomNum(1, 101), getRandomNum(1, 101)];
  const [firstNum, secondNum] = randomNums;
  const expression = `${firstNum} ${secondNum}`;
  const result = findGcd(firstNum, secondNum);
  const gameData = [expression, `${result}`];
  return gameData;
};

const startGame = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  playGame(question, generateGameData);
};

export default startGame;
