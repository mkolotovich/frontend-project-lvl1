import readlineSync from 'readline-sync';
import { checkNumIsPrime } from './games/prime.js';
import isNumInProgression from './games/progression.js';
import isGcd from './games/gcd.js';
import isEven from './games/even.js';
import isCalculateNumCorrect from './games/calc.js';
import { greeting, whatIsUserName } from './cli.js';

const getRandomIndex = (arr, length = arr.length) => {
  if (length === arr.length) {
    return Math.floor(Math.random() * Math.floor(arr.length));
  }
  return Math.floor(Math.random() * Math.floor(length));
};

const playGame = (arr, question) => {
  greeting();
  let correctAnswersCount = 0;
  const winAnswersCount = 3;
  console.log(question);
  while (correctAnswersCount < winAnswersCount) {
    const index = getRandomIndex(arr);
    const index1 = getRandomIndex(arr);
    const index2 = getRandomIndex(arr, 3);
    const funcArr = [checkNumIsPrime, isNumInProgression, isGcd, isEven, isCalculateNumCorrect];
    const questionsArr = ['Answer "yes" if given number is prime. Otherwise answer "no".', 'What number is missing in the progression?', 'Find the greatest common divisor of given numbers.', 'Answer "yes" if the number is even, otherwise answer "no".', 'What is the result of the expression?'];
    const funcIndex = questionsArr.indexOf(question);
    const signs = ['+', '-', '*'];
    const firstNum = arr[index];
    const secondNum = arr[index1];
    const expression = `${firstNum} ${signs[index2]} ${secondNum}`;
    if (question === 'Answer "yes" if the number is even, otherwise answer "no".') {
      console.log(`Question: ${arr[index]}`);
    } else if (question === 'Find the greatest common divisor of given numbers.') {
      console.log(`Question: ${firstNum} ${secondNum}`);
    } else {
      console.log(`Question: ${expression}`);
    }
    const answer = readlineSync.question('Your answer: ');
    if (funcArr[funcIndex](arr, index, index1, index2, firstNum, secondNum, answer)[0] && question !== 'Answer "yes" if the number is even, otherwise answer "no".') {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else if (funcArr[funcIndex](arr, index, index1, index2, firstNum, secondNum, answer)[0] && answer === 'yes') {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else if (!funcArr[funcIndex](arr, index, index1, index2, firstNum, secondNum, answer)[0] && answer === 'no') {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else {
      if (question === 'What is the result of the expression?' || question === 'Find the greatest common divisor of given numbers.') {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${funcArr[funcIndex](arr, index, index1, index2, firstNum, secondNum, answer)[1]}'.`);
      } else if (funcArr[funcIndex](arr, index, index1, index2) && answer !== 'yes') {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      }
      console.log(`Let's try again, ${whatIsUserName()}!`);
      break;
    }
  }
  if (correctAnswersCount === winAnswersCount) {
    console.log(`Congratulations, ${whatIsUserName()}!`);
  }
};

export default playGame;
