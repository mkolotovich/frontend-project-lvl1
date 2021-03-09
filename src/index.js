import readlineSync from 'readline-sync';
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
  console.log(question);
  while (correctAnswersCount < winAnswersCount) {
    const indexForFirstNum = getRandomIndex(nums);
    const indexForSecondNum = getRandomIndex(nums);
    const sign = getRandomIndex(signs);
    const roundQuestion = gameFunction(indexForFirstNum, indexForSecondNum, sign)[4];
    console.log(`Question: ${roundQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    const result = gameFunction(indexForFirstNum, indexForSecondNum, sign, answer)[0];
    const correctAnswer = gameFunction(indexForFirstNum, indexForSecondNum, sign, answer)[6];
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
