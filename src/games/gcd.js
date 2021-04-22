import playGame from '../index.js';
import getRandomNum from '../randomNum.js';

const findGcd = (firstNum, secondNum) => {
  if (firstNum % secondNum === 0) { return secondNum; }
  return findGcd(secondNum, firstNum % secondNum);
};

const generateGameData = () => {
  const randomNums = [getRandomNum(1, 101), getRandomNum(1, 101)];
  const [firstNum, secondNum] = randomNums;
  const question = `${firstNum} ${secondNum}`;
  const answer = firstNum > secondNum ? `${findGcd(firstNum, secondNum)}` : `${findGcd(secondNum, firstNum)}`;
  return [question, answer];
};

const startGame = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  playGame(question, generateGameData);
};

export default startGame;
