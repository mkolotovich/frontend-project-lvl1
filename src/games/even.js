import readlineSync from 'readline-sync';
import { whatIsUserName } from '../cli.js';

const isEven = (arr, index) => {
  console.log(`Question: ${arr[index]}`);
  const number = arr[index];
  const answer = readlineSync.question('Your answer: ');
  if ((number % 2 !== 0 && answer === 'no') || (number % 2 === 0 && answer === 'yes')) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
  console.log(`Let's try again, ${whatIsUserName()}!`);
  return false;
};

export default isEven;
