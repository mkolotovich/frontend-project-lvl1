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

const compareFuncWithAnswer = (compareFunction, compareAnswer, question) => {
  if ((compareFunction && compareAnswer === 'yes') || (!compareFunction && compareAnswer === 'no' && question.includes('yes'))) {
    return true;
  }
  return false;
};

const getAnswer = (func, question, answer) => {
  if ((func[0] && !question.includes('yes')) || compareFuncWithAnswer(func[0], answer, question)) {
    console.log('Correct!');
    return true;
  }
  if (!question.includes('yes')) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${func[1]}'.`);
  } else if (func[0] && answer !== 'yes') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
  }
  return false;
};

const getData = (question) => {
  const winAnswersCount = 3;
  const funcArr = [isPrime, isNumInProgression, isGcd, isEven, isCalculateNumCorrect];
  const questionsArr = ['Answer "yes" if given number is prime. Otherwise answer "no".', 'What number is missing in the progression?', 'Find the greatest common divisor of given numbers.', 'Answer "yes" if the number is even, otherwise answer "no".', 'What is the result of the expression?'];
  const funcIndex = questionsArr.indexOf(question);
  return [winAnswersCount, funcArr, funcIndex];
};

const playGame = (arr, question) => {
  let correctAnswersCount = 0;
  greeting();
  console.log(question);
  while (correctAnswersCount < getData()[0]) {
    const index = getRandomIndex(arr);
    const index1 = getRandomIndex(arr);
    const index2 = getRandomIndex(arr, 3);
    console.log(`Question: ${getData()[1][getData(question)[2]](arr, index, index1, index2, arr[index], arr[index1])[2]}`);
    const answer = readlineSync.question('Your answer: ');
    if
    (getAnswer(
      getData(
      )[1][getData(question)[2]](arr, index, index1, index2, arr[index], arr[index1], answer),
      question, answer,
    )) {
      correctAnswersCount += 1;
    } else {
      console.log(`Let's try again, ${whatIsUserName()}!`);
      break;
    }
  }
  if (correctAnswersCount === getData()[0]) {
    console.log(`Congratulations, ${whatIsUserName()}!`);
  }
};

export default playGame;
