import playGame from '../index.js';
import getRandomIndex from '../randomNum.js';

const isEven = (number) => number % 2 === 0;

const checkNumIsEven = () => {
  const nums = [15, 6, 7];
  const randomIndex = getRandomIndex(nums);
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  return [isEven(nums[randomIndex]), checkNumIsEven, nums[randomIndex], question];
};

const startGame = () => {
  playGame(checkNumIsEven());
};

export default startGame;
