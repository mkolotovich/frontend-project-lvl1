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
    const funcArr = [isPrime, isNumInProgression];
    const questionsArr = ['Answer "yes" if given number is prime. Otherwise answer "no".', 'What number is missing in the progression?'];
    for (let i = 0; i < arr.length; i += 1) {
      if (question === questionsArr[i]) {
        if (funcArr[i](arr, index)) {
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
