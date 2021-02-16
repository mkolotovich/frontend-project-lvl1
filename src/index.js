import readlineSync from 'readline-sync';
import isPrime from './games/prime.js';
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

const getAnswer = (func, question, answer) => {
  if ((func[0] && question === 'What is the result of the expression?')
  || (func[0] && question === 'Find the greatest common divisor of given numbers.')
  || (func[0] && question === 'What number is missing in the progression?')
  || (func[0] && answer === 'yes')
  || (!func[0] && answer === 'no')) {
    console.log('Correct!');
    return true;
  }
  if (question === 'What is the result of the expression?' || question === 'Find the greatest common divisor of given numbers.' || question === 'What number is missing in the progression?') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${func[1]}'.`);
  } else if (func && answer !== 'yes') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
  }
  return false;
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
    const funcArr = [isPrime, isNumInProgression, isGcd, isEven, isCalculateNumCorrect];
    const questionsArr = ['Answer "yes" if given number is prime. Otherwise answer "no".', 'What number is missing in the progression?', 'Find the greatest common divisor of given numbers.', 'Answer "yes" if the number is even, otherwise answer "no".', 'What is the result of the expression?'];
    const funcIndex = questionsArr.indexOf(question);
    const signs = ['+', '-', '*'];
    const expression = `${arr[index]} ${signs[index2]} ${arr[index1]}`;
    const modifyedNumbers = arr.slice();
    modifyedNumbers[index] = '..';
    const progression = modifyedNumbers.join(' ');
    if (question === 'Answer "yes" if the number is even, otherwise answer "no".' || question === 'Answer "yes" if given number is prime. Otherwise answer "no".') {
      console.log(`Question: ${arr[index]}`);
    } else if (question === 'Find the greatest common divisor of given numbers.') {
      console.log(`Question: ${arr[index]} ${arr[index1]}`);
    } else if (question === 'What number is missing in the progression?') {
      console.log(`Question: ${progression}`);
    } else {
      console.log(`Question: ${expression}`);
    }
    const answer = readlineSync.question('Your answer: ');
    if (getAnswer(funcArr[funcIndex](arr, index, index1, index2, arr[index], arr[index1], answer),
      question, answer)) {
      correctAnswersCount += 1;
    } else {
      console.log(`Let's try again, ${whatIsUserName()}!`);
      break;
    }
  }
  if (correctAnswersCount === winAnswersCount) {
    console.log(`Congratulations, ${whatIsUserName()}!`);
  }
};

export default playGame;
