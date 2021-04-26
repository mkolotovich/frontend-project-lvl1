import readlineSync from 'readline-sync';

const playGame = (question, generateRoundData) => {
  let correctAnswersCount = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const winAnswersCount = 3;
  console.log(question);
  while (correctAnswersCount < winAnswersCount) {
    const [roundQuestion, correctAnswer] = generateRoundData();
    console.log(`Question: ${roundQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
