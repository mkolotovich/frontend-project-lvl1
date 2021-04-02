import readlineSync from 'readline-sync';

const playGame = (args) => {
  let correctAnswersCount = 0;
  const [, gameFunction, , question] = args;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const winAnswersCount = 3;
  console.log(question);
  while (correctAnswersCount < winAnswersCount) {
    const [,, roundQuestion,, randomIndexes] = gameFunction();
    console.log(`Question: ${roundQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    const [result, , , , , correctAnswer] = gameFunction(answer, randomIndexes);
    if ((result && !question.includes('yes')) || (result && answer === 'yes') || (!result && answer === 'no')) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (correctAnswersCount === winAnswersCount) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default playGame;
