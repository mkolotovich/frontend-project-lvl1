import playGame from '../index.js';
import getRandomIndex from '../randomIndex.js';

const generateGameData = () => {
  const nums = [5, 7, 9, 11, 13, 15, 17, 19, 21, 23];
  const modifyedNumbers = nums.slice();
  const randomIndex = getRandomIndex(nums);
  modifyedNumbers[randomIndex] = '..';
  const progression = modifyedNumbers.join(' ');
  const gameData = [progression, `${nums[randomIndex]}`];
  return gameData;
};

const startGame = () => {
  const question = 'What number is missing in the progression?';
  playGame(question, generateGameData);
};

export default startGame;
