import playGame from '../index.js';

const isEven = (number) => {
  if (number % 2 !== 0) {
    return false;
  }
  return true;
};

const checkNumIsEven = (index) => {
  const nums = [15, 6, 7];
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  return [isEven(nums[index]), checkNumIsEven, nums, question, nums[index], nums];
};

export default checkNumIsEven;

playGame(checkNumIsEven());
