import readlineSync from 'readline-sync';
import { whatIsUserName } from './cli.js';

const brainEven = () => {
  let count = 0;
  let correctAnswersCount = 0;
  const numbers = [15, 6, 7];
  const winAnswersCount = 3;
  while (correctAnswersCount < winAnswersCount) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log(`Question: ${numbers[count]}`);
    const number = numbers[count];
    const answer = readlineSync.question('Your answer: ');
    if ((number % 2 !== 0 && answer === 'no') || (number % 2 === 0 && answer === 'yes')) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${whatIsUserName()}!`);
      break;
    }
    if (count === numbers.length - 1) {
      count = 0;
    } else {
      count += 1;
    }
  }
  if (correctAnswersCount === winAnswersCount) {
    console.log(`Congratulations, ${whatIsUserName()}!`);
  }
};

export default brainEven;
