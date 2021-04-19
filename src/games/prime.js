import playGame from '../index.js';
import getRandomNum from '../randomNum.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateGameData = (answer) => {
  const randomNum = getRandomNum(1, 10);
  const result = isPrime(randomNum);
  const gameData = [];
  gameData.push(randomNum);
  if (result && answer !== 'yes') {
    gameData.push('yes');
  } else {
    gameData.push('no');
  }
  return gameData;
};

const startGame = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(question, generateGameData);
};

export default startGame;
