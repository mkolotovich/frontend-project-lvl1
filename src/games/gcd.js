import playGame from '../index.js';
import getRandomNum from '../randomNum.js';

const findGcd = (firstNum, secondNum) => {
  const bigger = (firstNum > secondNum) ? firstNum : secondNum;
  const smaller = (firstNum > secondNum) ? secondNum : firstNum;
  if (bigger % smaller === 0) { return smaller; }
  return findGcd(smaller, bigger % smaller);
};

const generateGameData = () => {
  const firstNum = getRandomNum(1, 101);
  const secondNum = getRandomNum(1, 101);
  const question = `${firstNum} ${secondNum}`;
  const answer = findGcd(firstNum, secondNum).toString();
  return [question, answer];
};

const startGame = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  playGame(question, generateGameData);
};

export default startGame;
