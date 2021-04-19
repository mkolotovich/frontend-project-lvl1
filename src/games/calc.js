import playGame from '../index.js';
import getRandomNum from '../randomNum.js';
import getRandomIndex from '../randomIndex.js';

const generateGameData = () => {
  const signs = ['+', '-', '*'];
  const actions = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, signs];
  const randomExpression = [getRandomNum(1, 25), getRandomIndex(signs), getRandomNum(1, 25)];
  const [firstNum, sign, secondNum] = randomExpression;
  const expression = `${firstNum} ${signs[sign]} ${secondNum}`;
  const result = actions[sign](firstNum, secondNum);
  const gameData = [expression, `${result}`];
  return gameData;
};

const startGame = () => {
  const question = 'What is the result of the expression?';
  playGame(question, generateGameData);
};

export default startGame;
