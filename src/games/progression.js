import playGame from '../index.js';
import getRandomIndex from '../randomNum.js';

const makeProgression = (firstItem, step, length) => {
  const minLength = 5;
  const progressionLength = (length < minLength) ? minLength : length;
  const progression = [];
  let progressionItem = firstItem;
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = progressionItem;
    progressionItem += step;
  }
  return progression;
};

const generateGameData = () => {
  const progression = makeProgression(5, 2, 10);
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
