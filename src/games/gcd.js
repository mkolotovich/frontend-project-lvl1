import readlineSync from 'readline-sync';
import { whatIsUserName } from '../cli.js';
import getRandomIndex from '../index.js';

const gcd = () => {
  let correctAnswersCount = 0;
  const numbers = [25, 50, 100, 52, 3, 9, 3, 3, 4, 5, 1, 1];
  const winAnswersCount = 3;
  console.log('Find the greatest common divisor of given numbers.');
  while (correctAnswersCount < winAnswersCount) {
    const firstNum = numbers[getRandomIndex(numbers)];
    const secondNum = numbers[getRandomIndex(numbers)];
    console.log(`Question: ${firstNum} ${secondNum}`);
    let bigger;
    let smaller;
    if (firstNum > secondNum) {
      bigger = firstNum;
      smaller = secondNum;
    } else {
      bigger = secondNum;
      smaller = firstNum;
    }
    let restOfDivide;
    let quotient;
    do {
      quotient = Math.floor(bigger / smaller);
      restOfDivide = bigger - quotient * smaller;
      bigger = smaller;
      smaller = restOfDivide;
    }
    while (restOfDivide !== 0);
    const answer = readlineSync.question('Your answer: ');
    if (bigger === Number(answer)) {
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

export default gcd;
