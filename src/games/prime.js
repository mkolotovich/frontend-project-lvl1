import playGame from '../index.js';
import getRandomIndex from '../randomNum.js';

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

const checkPrime = (answer, randomIndexParam) => {
  const nums = [3, 5, 6, 7];
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
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return [isPrime(nums[randomIndex]), checkPrime, nums[randomIndex], question, randomIndexClone];
};

const startGame = () => {
  playGame(checkPrime());
};

export default startGame;
