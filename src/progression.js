import readlineSync from 'readline-sync';
import { whatIsUserName } from './cli.js';
import getRandomIndex from './index.js';

const progression = () => {
  let correctAnswersCount = 0;
  const winAnswersCount = 3;
  const numbers = [5, 7, 9, 11, 13, 15, 17, 19, 21, 23];
  console.log('What number is missing in the progression?');
  while (correctAnswersCount < winAnswersCount) {
    const index = getRandomIndex(numbers);
    const modifyedNumbers = numbers.slice();
    modifyedNumbers[index] = '..';
    console.log(`Question: ${modifyedNumbers}`);
    const answer = readlineSync.question('Your answer: ');
    if (numbers[index] === Number(answer)) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${whatIsUserName()}!`);
      correctAnswersCount = winAnswersCount;
    }
  }
};

export default progression;
