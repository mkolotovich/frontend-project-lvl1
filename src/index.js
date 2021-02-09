import isPrime from './games/prime.js';
import isNumInProgression from './games/progression.js';
import isGcd from './games/gcd.js';
import { whatIsUserName } from './cli.js';

const getRandomIndex = (arr) => Math.floor(Math.random() * Math.floor(arr.length));

export default getRandomIndex;

export const playGame = (arr, question) => {
  let correctAnswersCount = 0;
  let isCorrect;
  const winAnswersCount = 3;
  console.log(question);
  while (correctAnswersCount < winAnswersCount) {
    const index = getRandomIndex(arr);
    const index1 = getRandomIndex(arr);
    const funcArr = [isPrime, isNumInProgression, isGcd];
    const questionsArr = ['Answer "yes" if given number is prime. Otherwise answer "no".', 'What number is missing in the progression?', 'Find the greatest common divisor of given numbers.'];
    for (let i = 0; i < arr.length; i += 1) {
      if (question === questionsArr[i]) {
        if (funcArr[i](arr, index, index1)) {
          correctAnswersCount += 1;
          isCorrect = true;
        } else {
          correctAnswersCount = 3;
          isCorrect = false;
        }
      }
    }
  }
  if (correctAnswersCount === winAnswersCount && isCorrect === true) {
    console.log(`Congratulations, ${whatIsUserName()}!`);
  }
};
