import readlineSync from 'readline-sync';
import { whatIsUserName } from '../cli.js';

const isCalculateNumCorrect = (arr, index, index1, index2) => {
  const sum = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mult = (a, b) => a * b;
  const signs = ['+', '-', '*'];
  const actions = [sum, sub, mult];
  const firstNum = arr[index];
  const secondNum = arr[index1];
  const expression = `${firstNum} ${signs[index2]} ${secondNum}`;
  console.log(`Question: ${expression}`);
  const result = actions[index2](firstNum, secondNum);
  const answer = readlineSync.question('Your answer: ');
  if (result === Number(answer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
  console.log(`Let's try again, ${whatIsUserName()}!`);
  return false;
};

export default isCalculateNumCorrect;
