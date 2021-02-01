import readlineSync from 'readline-sync';
import { whatIsUserName } from './cli.js';
import getRandomIndex from './index.js';

const brainCalc = () => {
  let correctAnswersCount = 0;
  const numbers = [35, 16, 4, 10, 25, 11, 7];
  const sum = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mult = (a, b) => a * b;
  const signs = ['+', '-', '*'];
  const actions = [sum, sub, mult];
  let result;
  let expression;
  const winAnswersCount = 3;
  console.log('What is the result of the expression?');
  while (correctAnswersCount < winAnswersCount) {
    const firstNum = numbers[getRandomIndex(numbers)];
    const secondNum = numbers[getRandomIndex(numbers)];
    const index = getRandomIndex(signs);
    expression = `${firstNum} ${signs[index]} ${secondNum}`;
    console.log(`Question: ${expression}`);
    result = actions[index](firstNum, secondNum);
    const answer = readlineSync.question('Your answer: ');
    if (result === Number(answer)) {
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

export default brainCalc;
