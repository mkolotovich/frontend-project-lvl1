import isPrime from './games/prime.js';
import isNumInProgression from './games/progression.js';
import isGcd from './games/gcd.js';
import isEven from './games/even.js';
import isCalculateNumCorrect from './games/calc.js';
import { whatIsUserName } from './cli.js';

const getRandomIndex = (arr, length = arr.length) => {
  if (length === arr.length) {
    return Math.floor(Math.random() * Math.floor(arr.length));
  }
  return Math.floor(Math.random() * Math.floor(length));
};

export default getRandomIndex;

export const playGame = (arr, question) => {
  let correctAnswersCount = 0;
  let isCorrect;
  const winAnswersCount = 3;
  console.log(question);
  while (correctAnswersCount < winAnswersCount) {
    const index = getRandomIndex(arr);
    const index1 = getRandomIndex(arr);
    const index2 = getRandomIndex(arr, 3);
    const funcArr = [isPrime, isNumInProgression, isGcd, isEven, isCalculateNumCorrect];
    const questionsArr = ['Answer "yes" if given number is prime. Otherwise answer "no".', 'What number is missing in the progression?', 'Find the greatest common divisor of given numbers.', 'Answer "yes" if the number is even, otherwise answer "no".', 'What is the result of the expression?'];
    const funcIndex = questionsArr.indexOf(question);
    if (questionsArr.includes(question)) {
      if (funcArr[funcIndex](arr, index, index1, index2)) {
        correctAnswersCount += 1;
        isCorrect = true;
      } else {
        correctAnswersCount = winAnswersCount;
        isCorrect = false;
      }
    }
  }
  if (correctAnswersCount === winAnswersCount && isCorrect === true) {
    console.log(`Congratulations, ${whatIsUserName()}!`);
  }
};
