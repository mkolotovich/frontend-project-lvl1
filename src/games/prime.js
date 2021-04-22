import playGame from '../index.js';
import getRandomNum from '../randomNum.js';

const isPrime = (num) => {
  if (num < 2) { return false; }
  for (let i = 2; i <= num / 2; i += 1) { if (num % i === 0) { return false; } }
  return true;
};

const generateGameData = () => {
  const question = getRandomNum(1, 10);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const startGame = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(question, generateGameData);
};

export default startGame;
