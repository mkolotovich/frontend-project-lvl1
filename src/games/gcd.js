import playGame from '../index.js';

const isGcd = (firstNum, secondNum) => {
  let bigger; let smaller;
  if (firstNum > secondNum) {
    bigger = firstNum; smaller = secondNum;
  } else {
    bigger = secondNum; smaller = firstNum;
  }
  let restOfDivide; let quotient;
  if (bigger !== undefined) {
    do {
      quotient = Math.floor(bigger / smaller);
      restOfDivide = bigger - quotient * smaller;
      bigger = smaller; smaller = restOfDivide;
    }
    while (restOfDivide !== 0);
  }
  return bigger;
};

const checkGcd = (indexForFirstNum, indexForSecondNum, sign, answer) => {
  const nums = [25, 50, 100, 52, 3, 9, 3, 3, 4, 5, 1, 1];
  const question = 'Find the greatest common divisor of given numbers.';
  if (isGcd(nums[indexForFirstNum], nums[indexForSecondNum]) === Number(answer)) {
    return [true, checkGcd, nums, question, `${nums[indexForFirstNum]} ${nums[indexForSecondNum]}`, nums];
  }
  return [false, checkGcd, nums, question, `${nums[indexForFirstNum]} ${nums[indexForSecondNum]}`, nums, isGcd(nums[indexForFirstNum], nums[indexForSecondNum], answer)];
};

export default checkGcd;

playGame(checkGcd());
