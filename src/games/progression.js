import playGame from '../index.js';

const isNumInProgression = (num, answer) => {
  if (num === Number(answer)) {
    return [true];
  }
  return [false, num];
};

const checkProgression = (randomIndex, indexForSecondNum, sign, answer) => {
  const nums = [5, 7, 9, 11, 13, 15, 17, 19, 21, 23];
  const question = 'What number is missing in the progression?';
  const modifyedNumbers = nums.slice();
  modifyedNumbers[randomIndex] = '..';
  const progression = modifyedNumbers.join(' ');
  return [isNumInProgression(nums[randomIndex], answer)[0],
    checkProgression, nums, question, progression, nums, nums[randomIndex]];
};

export default checkProgression;

playGame(checkProgression());
