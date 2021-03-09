import playGame from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const checkPrime = (randomIndex) => {
  const nums = [3, 5, 6, 7];
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return [isPrime(nums[randomIndex]), checkPrime, nums, question, nums[randomIndex], nums];
};

export default checkPrime;

playGame(checkPrime());
