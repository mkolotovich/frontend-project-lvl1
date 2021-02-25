import readlineSync from 'readline-sync';
import isPrime from './games/prime.js';
import isNumInProgression from './games/progression.js';
import isGcd from './games/gcd.js';
import isEven from './games/even.js';
import isCalculateNumCorrect from './games/calc.js';
import { greeting, whatIsUserName } from './cli.js';
import getRandomIndex from './randomNum.js';

const getData = () => {
  const winAnswersCount = 3;
  const funcArr = [isPrime, isNumInProgression, isGcd, isEven, isCalculateNumCorrect];
  const questionsArr = ['Answer "yes" if given number is prime. Otherwise answer "no".', 'What number is missing in the progression?', 'Find the greatest common divisor of given numbers.', 'Answer "yes" if the number is even, otherwise answer "no".', 'What is the result of the expression?'];
  let funcIndex;
  let question;
  switch (process.argv[1]) {
    case '/usr/bin/brain-calc':
      funcIndex = 4;
      [, , , , question] = questionsArr;
      break;
    case '/usr/bin/brain-even':
      funcIndex = 3;
      [, , , question] = questionsArr;
      break;
    case '/usr/bin/brain-gcd':
      funcIndex = 2;
      [, , question] = questionsArr;
      break;
    case '/usr/bin/brain-prime':
      funcIndex = 0;
      [question] = questionsArr;
      break;
    case '/usr/bin/brain-progression':
      funcIndex = 1;
      [, question] = questionsArr;
      break;
    default:
      funcIndex = undefined;
  }
  return [winAnswersCount, funcArr, funcIndex, question];
};

const compareFalseFuncWithAnswer = (compareFunction, compareAnswer) => {
  if (!getData()[3].includes('yes')) {
    console.log(`'${compareAnswer}' is wrong answer ;(. Correct answer was '${compareFunction[4]}'.`);
  } else if (compareFunction[0] && compareAnswer !== 'yes') {
    console.log(`'${compareAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
  } else {
    console.log(`'${compareAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
  }
};

const compareTrueFuncWithAnswer = (compareFunction, compareAnswer) => {
  if ((compareFunction && compareAnswer === 'yes') || (!compareFunction && compareAnswer === 'no' && getData()[1][3]()[1].includes('yes'))) {
    return true;
  }
  return false;
};

const getAnswer = (func, answer) => {
  if ((func[0] && !func[1].includes('yes')) || compareTrueFuncWithAnswer(func[0], answer)) {
    console.log('Correct!');
    return true;
  }
  compareFalseFuncWithAnswer(func, answer);
  return false;
};

const playGame = () => {
  let correctAnswersCount = 0;
  greeting();
  console.log(getData()[3]);
  while (correctAnswersCount < getData()[0]) {
    const index = getRandomIndex(getData()[1][getData()[2]]()[3]);
    const index1 = getRandomIndex(getData()[1][getData()[2]]()[3]);
    const index2 = getRandomIndex(getData()[1][getData()[2]]()[3], 3);
    console.log(`Question: ${getData()[1][getData()[2]](index, index1, index2)[2]}`);
    const answer = readlineSync.question('Your answer: ');
    if (getAnswer(getData()[1][getData()[2]](index, index1, index2, answer), answer)) {
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
