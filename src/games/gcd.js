import playGame from '../index.js';
import getRandomNum from '../randomNum.js';

const findGcd = (firstNum, secondNum) => {
  if (firstNum % secondNum === 0) { return secondNum; }
  return findGcd(secondNum, firstNum % secondNum);
};

const generateGameData = () => {
  const randomNums = [getRandomNum(1, 101), getRandomNum(1, 101)];
  const [firstNum, secondNum] = randomNums;
  const expression = `${firstNum} ${secondNum}`;
  const result = firstNum > secondNum ? findGcd(firstNum, secondNum) : findGcd(secondNum, firstNum);
  const gameData = [expression, `${result}`];
  return gameData;
};

const startGame = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  playGame(question, generateGameData);
};

export default startGame;
