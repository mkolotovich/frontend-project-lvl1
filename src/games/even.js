import readlineSync from 'readline-sync';
import { whatIsUserName } from '../cli.js';
import getRandomIndex from '../index.js';

const brainEven = () => {
  let correctAnswersCount = 0;
  const numbers = [15, 6, 7];
  const winAnswersCount = 3;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (correctAnswersCount < winAnswersCount) {
    const index = numbers[getRandomIndex(numbers)];
    console.log(`Question: ${index}`);
    const number = index;
    const answer = readlineSync.question('Your answer: ');
    if ((number % 2 !== 0 && answer === 'no') || (number % 2 === 0 && answer === 'yes')) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${whatIsUserName()}!`);
      break;
    }
  }
  if (correctAnswersCount === winAnswersCount) {
    console.log(`Congratulations, ${whatIsUserName()}!`);
  }
};

export default brainEven;
