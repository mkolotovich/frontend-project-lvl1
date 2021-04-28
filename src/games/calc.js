import playGame from '../index.js';
import getRandomNum from '../randomNum.js';

const generateGameData = () => {
  const operations = [['+', (a, b) => a + b], ['-', (a, b) => a - b], ['*', (a, b) => a * b]];
  const firstNum = getRandomNum(1, 25);
  const signsIndex = getRandomNum(0, operations.length);
  const secondNum = getRandomNum(1, 25);
  const [sign, operation] = operations[signsIndex];
  const question = `${firstNum} ${sign} ${secondNum}`;
  const answer = operation(firstNum, secondNum).toString();
  return [question, answer];
};

const startGame = () => {
  const question = 'What is the result of the expression?';
  playGame(question, generateGameData);
};

export default startGame;
