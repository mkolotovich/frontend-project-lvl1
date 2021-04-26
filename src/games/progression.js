import playGame from '../index.js';
import getRandomIndex from '../randomNum.js';

const makeProgression = (progressionStart, step, length) => {
  const progression = [];
  let progressionItem = progressionStart;
  for (let i = 0; i < length; i += 1) {
    progression[i] = progressionItem;
    progressionItem += step;
  }
  return progression;
};

const generateGameData = () => {
  const minLength = 5;
  const progressionStart = 5;
  const step = 2;
  const length = 10;
  const progression = (length > minLength) ? makeProgression(progressionStart, step, length)
    : makeProgression(progressionStart, step, minLength);
  const modifyedNumbers = progression.slice();
  const randomIndex = getRandomIndex(0, progression.length);
  modifyedNumbers[randomIndex] = '..';
  const question = modifyedNumbers.join(' ');
  const answer = progression[randomIndex].toString();
  return [question, answer];
};

const startGame = () => {
  const question = 'What number is missing in the progression?';
  playGame(question, generateGameData);
};

export default startGame;
