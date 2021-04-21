import playGame from '../index.js';
import getRandomNum from '../randomNum.js';

const isEven = (number) => number % 2 === 0;

const generateGameData = () => {
  const question = getRandomNum(0, 20);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const startGame = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(question, generateGameData);
};

export default startGame;
