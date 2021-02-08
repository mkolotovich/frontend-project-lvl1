import readlineSync from 'readline-sync';
import { whatIsUserName } from '../cli.js';

const isNumInProgression = (arr, index) => {
  const modifyedNumbers = arr.slice();
  modifyedNumbers[index] = '..';
  console.log(`Question: ${modifyedNumbers}`);
  const answer = readlineSync.question('Your answer: ');
  if (arr[index] === Number(answer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${arr[index]}'.`);
  console.log(`Let's try again, ${whatIsUserName()}!`);
  return false;
};

export default isNumInProgression;
