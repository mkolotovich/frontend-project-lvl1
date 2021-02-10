import readlineSync from 'readline-sync';
import { whatIsUserName } from '../cli.js';

const isPrime = (arr, index) => {
  console.log(`Question: ${arr[index]}`);
  const dividers = [2];
  const lastDivider = Math.floor(Math.sqrt(arr[index]));
  const answer = readlineSync.question('Your answer: ');
  for (let i = 0; i < dividers.length; i += 1) {
    if (dividers[i] < lastDivider) {
      dividers.push(dividers[i] + 1);
    }
    if ((arr[index] % dividers[i] !== 0 && answer === 'yes') || (arr[index] % dividers[i] === 0 && answer === 'no')) {
      console.log('Correct!');
      return true;
    }
    if (arr[index] % dividers[i] !== 0 && answer !== 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
    }
    console.log(`Let's try again, ${whatIsUserName()}!`);
  }
  return false;
};

export default isPrime;
