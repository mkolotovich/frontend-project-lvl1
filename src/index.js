import readlineSync from 'readline-sync';

const playGame = (args) => {
  let correctAnswersCount = 0;
  // const signs = args[5];
  const [, gameFunction, num, question] = args;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const winAnswersCount = 3;
  console.log(question);
  while (correctAnswersCount < winAnswersCount) {
    // const indexForSecondNum = getRandomIndex(nums);
    // const sign = getRandomIndex(signs);
    const [result, , roundQuestion] = gameFunction(num);
    console.log(`Question: ${roundQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    // const correctAnswer = gameFunction(indexForFirstNum, indexForSecondNum, sign, answer)[6];
    const correctAnswer = args[0];
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
