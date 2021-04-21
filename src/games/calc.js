import playGame from '../index.js';
import getRandomNum from '../randomNum.js';

const generateGameData = () => {
  const signs = [['+', (a, b) => a + b], ['-', (a, b) => a - b], ['*', (a, b) => a * b]];
  const firstNum = getRandomNum(1, 25);
  const signsIndex = getRandomNum(0, signs.length);
  const secondNum = getRandomNum(1, 25);
  const [sign, expression] = signs[signsIndex];
  const question = `${firstNum} ${sign} ${secondNum}`;
  const answer = `${expression(firstNum, secondNum)}`;
  return [question, answer];
};

const startGame = () => {
  const question = 'What is the result of the expression?';
  playGame(question, generateGameData);
};

export default startGame;
