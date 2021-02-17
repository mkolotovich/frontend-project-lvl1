const isGcd = (arr, index, index1, index2, firstNum, secondNum, answer) => {
  let bigger; let smaller;
  if (firstNum > secondNum) {
    bigger = firstNum; smaller = secondNum;
  } else {
    bigger = secondNum; smaller = firstNum;
  }
  let restOfDivide; let quotient;
  do {
    quotient = Math.floor(bigger / smaller);
    restOfDivide = bigger - quotient * smaller;
    bigger = smaller; smaller = restOfDivide;
  }
  while (restOfDivide !== 0);
  if (bigger === Number(answer)) {
    return [true, bigger];
  }
  return [false, bigger, `${arr[index]} ${arr[index1]}`];
};

export default isGcd;
