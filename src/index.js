import readlineSync from 'readline-sync';
import isPrime from './games/prime.js';
import isNumInProgression from './games/progression.js';
import isGcd from './games/gcd.js';
import isEven from './games/even.js';
import isCalculateNumCorrect from './games/calc.js';
import getRandomIndex from './randomNum.js';

const playGame = () => {
  let correctAnswersCount = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const winAnswersCount = 3;
  const funcArr = [isPrime, isNumInProgression, isGcd, isEven, isCalculateNumCorrect];
  const questionsArr = ['Answer "yes" if given number is prime. Otherwise answer "no".', 'What number is missing in the progression?', 'Find the greatest common divisor of given numbers.', 'Answer "yes" if the number is even, otherwise answer "no".', 'What is the result of the expression?'];
  let funcIndex;
  let question;
  if (process.argv[1].includes('/brain-even')) {
    funcIndex = 3;
    [, , , question] = questionsArr;
  } else if (process.argv[1].includes('/brain-calc')) {
    funcIndex = 4;
    [, , , , question] = questionsArr;
  } else if (process.argv[1].includes('/brain-gcd')) {
    funcIndex = 2;
    [, , question] = questionsArr;
  } else if (process.argv[1].includes('/brain-prime')) {
    funcIndex = 0;
    [question] = questionsArr;
  } else {
    funcIndex = 1;
    [, question] = questionsArr;
  }
  console.log(question);
  while (correctAnswersCount < winAnswersCount) {
    const index = getRandomIndex(funcArr[funcIndex]()[3]);
    const index1 = getRandomIndex(funcArr[funcIndex]()[3]);
    const index2 = getRandomIndex(funcArr[funcIndex]()[3], 3);
    console.log(`Question: ${funcArr[funcIndex](index, index1, index2)[2]}`);
    const answer = readlineSync.question('Your answer: ');
    if ((funcArr[funcIndex](index, index1, index2, answer)[0] && !funcArr[funcIndex](index, index1, index2, answer)[1].includes('yes'))
      || (funcArr[funcIndex](index, index1, index2, answer)[0] && answer === 'yes')
      || (!funcArr[funcIndex](index, index1, index2, answer)[0] && answer === 'no' && question.includes('yes'))) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      if (!question.includes('yes')) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${funcArr[funcIndex](index, index1, index2, answer)[4]}'.`);
      } else if (funcArr[funcIndex](index, index1, index2, answer)[0] && answer !== 'yes') {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      }
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (correctAnswersCount === winAnswersCount) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default playGame;
