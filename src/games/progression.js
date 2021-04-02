import playGame from '../index.js';
import getRandomIndex from '../randomNum.js';

const isNumInProgression = (num, answer) => {
  if (num === Number(answer)) {
    return [true];
  }
  return [false, num];
};

const checkProgression = (answer, randomIndexesParam) => {
  const nums = [5, 7, 9, 11, 13, 15, 17, 19, 21, 23];
  const question = 'What number is missing in the progression?';
  const modifyedNumbers = nums.slice();
  let randomIndex = getRandomIndex(nums);
  let randomIndexClone;
  if (randomIndexesParam === undefined) {
    randomIndexClone = randomIndex;
  } else {
    randomIndexClone = randomIndexesParam;
  }
  if (randomIndex !== randomIndexClone) {
    randomIndex = randomIndexClone;
  }
  modifyedNumbers[randomIndex] = '..';
  const progression = modifyedNumbers.join(' ');
  return [isNumInProgression(nums[randomIndex], answer)[0],
    checkProgression, progression, question, randomIndexClone, nums[randomIndex]];
};

const startGame = () => {
  playGame(checkProgression());
};

export default startGame;
