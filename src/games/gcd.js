import readlineSync from 'readline-sync';
import { whatIsUserName } from '../cli.js';

const isGcd = (arr, index, index1) => {
  const firstNum = arr[index]; const secondNum = arr[index1];
  console.log(`Question: ${firstNum} ${secondNum}`);
  let bigger; let smaller;
  if (firstNum > secondNum) {
    bigger = firstNum; smaller = secondNum;
  } else {
    bigger = secondNum; smaller = firstNum;
  }
  let restOfDivide; let quotient;
  do {
    quotient = Math.floor(bigger / smaller);
    restOfDivide = bigger - quotient * smaller;
    bigger = smaller; smaller = restOfDivide;
  }
  while (restOfDivide !== 0);
  const answer = readlineSync.question('Your answer: ');
  if (bigger === Number(answer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${bigger}'.`);
  console.log(`Let's try again, ${whatIsUserName()}!`);
  return false;
};

export default isGcd;
