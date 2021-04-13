import playGame from '../index.js';
import getRandomIndex from '../randomNum.js';

const isEven = (number) => number % 2 === 0;

const generateGameData = (answer, randomIndexParam) => {
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
  const gameData = [randomIndex, nums[randomIndex], isEven(nums[randomIndex])];
  const [,,result] = gameData;
  if ((result && answer === 'yes') || (!result && answer === 'no')) {
    gameData.unshift(true);
  } else {
    gameData.unshift(false);
  }
  if (result && answer !== 'yes') {
    gameData.push('yes');
  } else {
    gameData.push('no');
  }
  return gameData;
};

const checkNumIsEven = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  return [question, generateGameData];
};

const startGame = () => {
  playGame(checkNumIsEven());
};

export default startGame;
