import playGame from '../index.js';
import getRandomIndex from '../randomNum.js';

const isEven = (number) => number % 2 === 0;

const checkNumIsEven = (answer, randomIndexParam) => {
  const nums = [15, 6, 7];
  let randomIndex = getRandomIndex(nums);
  let randomIndexClone;
  if (randomIndexParam === undefined) {
    randomIndexClone = randomIndex;
  } else {
    randomIndexClone = randomIndexParam;
  }
  if (randomIndex !== randomIndexClone) {
    randomIndex = randomIndexClone;
  }
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  if (isEven(nums[randomIndex]) && answer !== 'yes') {
    return [isEven(nums[randomIndex]), checkNumIsEven, nums[randomIndex], question, randomIndexClone, 'yes'];
  }
  return [isEven(nums[randomIndex]), checkNumIsEven, nums[randomIndex], question, randomIndexClone, 'no'];
};

const startGame = () => {
  playGame(checkNumIsEven());
};

export default startGame;
