import playGame from '../index.js';
import getRandomIndex from '../randomNum.js';

const generateGameData = () => {
  const progression = [5, 7, 9, 11, 13, 15, 17, 19, 21, 23];
  const modifyedNumbers = progression.slice();
  const randomIndex = getRandomIndex(0, progression.length);
  modifyedNumbers[randomIndex] = '..';
  const question = modifyedNumbers.join(' ');
  const answer = `${progression[randomIndex]}`;
  return [question, answer];
};

const startGame = () => {
  const question = 'What number is missing in the progression?';
  playGame(question, generateGameData);
};

export default startGame;
