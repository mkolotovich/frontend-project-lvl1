import readlineSync from 'readline-sync';
import prime from './prime.js';
import { greeting, whatIsUserName } from './cli.js';

const getRandomIndex = (arr) => Math.floor(Math.random() * Math.floor(arr.length));

export default getRandomIndex;

export const gameFlow = (arr, question) => {
  let correctAnswersCount = 0;
  const winAnswersCount = 3;
  console.log(question);
  while (correctAnswersCount < winAnswersCount) {
    const index = getRandomIndex(arr);
    console.log(`Question: ${arr[index]}`);
    const answer = readlineSync.question('Your answer: ');
    switch (question) {
      case 'Answer "yes" if given number is prime. Otherwise answer "no".':
        prime(arr, index, answer);
        break;
      default:
        greeting();
    }
    if (prime(arr, index, answer) === true) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${whatIsUserName()}!`);
      correctAnswersCount = winAnswersCount;
    }
  }
  if (correctAnswersCount === winAnswersCount) {
    console.log(`Congratulations, ${whatIsUserName()}!`);
  }
};
