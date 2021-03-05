import readlineSync from 'readline-sync';
import isPrime from './games/prime.js';
import isNumInProgression from './games/progression.js';
import isGcd from './games/gcd.js';
import getRandomIndex from './randomNum.js';

const playGame = (args) => {
  let correctAnswersCount = 0;
  const gameFunction = args[1];
  const nums = args[2];
  const signs = args[5];
  const question = args[3];
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const winAnswersCount = 3;
  const funcArr = [isPrime, isNumInProgression, isGcd];
  const questionsArr = ['Answer "yes" if given number is prime. Otherwise answer "no".', 'What number is missing in the progression?', 'Find the greatest common divisor of given numbers.'];
  let funcIndex;
  console.log(question);
  while (correctAnswersCount < winAnswersCount) {
    const indexforFirstNum = getRandomIndex(nums);
    const indexforSecondNum = getRandomIndex(nums);
    const sign = getRandomIndex(signs);
    const roundQuestion = gameFunction(indexforFirstNum, indexforSecondNum, sign)[4];
    console.log(`Question: ${roundQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    const result = gameFunction(indexforFirstNum, indexforSecondNum, sign, answer)[0];
    const correctAnswer = gameFunction(indexforFirstNum, indexforSecondNum, sign, answer)[6];
    //   || (!funcArr[funcIndex](index, index1, index2, answer)[0] && answer === 'no' && question.includes('yes'))) {
    if ((result && !question.includes('yes')) || (result && answer === 'yes') || (!result && answer === 'no')) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      if (!question.includes('yes')) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      } else if (result && answer !== 'yes') {
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
