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

const checkGcd = (index, index1, index2, answer) => {
  const arr = [25, 50, 100, 52, 3, 9, 3, 3, 4, 5, 1, 1];
  const question = 'Find the greatest common divisor of given numbers.';
  if (isGcd(arr[index], arr[index1]) === Number(answer)) {
    return [true, question, `${arr[index]} ${arr[index1]}`, arr];
  }
  return [false, question, `${arr[index]} ${arr[index1]}`, arr, isGcd(arr[index], arr[index1], answer)];
};

export default checkGcd;
