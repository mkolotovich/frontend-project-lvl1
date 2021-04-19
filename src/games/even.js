import playGame from '../index.js';
import getRandomNum from '../randomNum.js';

const isEven = (number) => number % 2 === 0;

const generateGameData = (answer) => {
  const randomNum = getRandomNum(0, 20);
  const gameData = [];
  gameData.push(randomNum);
  const result = isEven(randomNum);
  if (result && answer !== 'yes') {
    gameData.push('yes');
  } else {
    gameData.push('no');
  }
  return gameData;
};

const startGame = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(question, generateGameData);
};

export default startGame;
