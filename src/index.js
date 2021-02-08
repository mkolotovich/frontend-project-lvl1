import isPrime from './games/prime.js';
import isNumInProgression from './games/progression.js';
import { greeting, whatIsUserName } from './cli.js';

const getRandomIndex = (arr) => Math.floor(Math.random() * Math.floor(arr.length));

export default getRandomIndex;

export const playGame = (arr, question) => {
  let correctAnswersCount = 0;
  let isCorrect;
  const winAnswersCount = 3;
  console.log(question);
  while (correctAnswersCount < winAnswersCount) {
    const index = getRandomIndex(arr);
    switch (question) {
      case 'Answer "yes" if given number is prime. Otherwise answer "no".':
        if (isPrime(arr, index)) {
          correctAnswersCount += 1;
          isCorrect = true;
        } else {
          correctAnswersCount = 3;
          isCorrect = false;
        }
        break;
      case 'What number is missing in the progression?':
        if (isNumInProgression(arr, index)) {
          correctAnswersCount += 1;
          isCorrect = true;
        } else {
          correctAnswersCount = 3;
          isCorrect = false;
        }
        break;
      default:
        greeting();
    }
  }
  if (correctAnswersCount === winAnswersCount && isCorrect === true) {
    console.log(`Congratulations, ${whatIsUserName()}!`);
  }
};
