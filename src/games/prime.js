import readlineSync from 'readline-sync';
import { whatIsUserName } from '../cli.js';

export const isPrime = (arr, index) => {
  if (arr[index] < 2) {
    return false;
  }
  for (let i = 2; i < arr[index] / 2; i += 1) {
    if (arr[index] % i === 0) {
      return false;
    }
  }
  return true;
};

export const checkNumIsPrime = (arr, index) => {
  console.log(`Question: ${arr[index]}`);
  const answer = readlineSync.question('Your answer: ');
  if ((isPrime(arr, index) && answer === 'yes') || (isPrime(arr, index) === false && answer === 'no')) {
    console.log('Correct!');
    return true;
  }
  if (isPrime(arr, index) && answer !== 'yes') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
  }
  console.log(`Let's try again, ${whatIsUserName()}!`);
  return false;
};
