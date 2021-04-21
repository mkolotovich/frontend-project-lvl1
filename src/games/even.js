import playGame from '../index.js';
import getRandomNum from '../randomNum.js';

const isEven = (number) => number % 2 === 0;

const generateGameData = () => {
  const randomNum = getRandomNum(0, 20);
  const gameData = [];
  gameData.push(randomNum);
  isEven(randomNum) ? gameData.push('yes') : gameData.push('no');
  return gameData;
};

const startGame = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(question, generateGameData);
};

export default startGame;
