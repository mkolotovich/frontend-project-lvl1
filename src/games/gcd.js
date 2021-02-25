const isGcd = (index, index1, index2, answer) => {
  const arr = [25, 50, 100, 52, 3, 9, 3, 3, 4, 5, 1, 1];
  const question = 'Find the greatest common divisor of given numbers.';
  let bigger; let smaller;
  if (arr[index] > arr[index1]) {
    bigger = arr[index]; smaller = arr[index1];
  } else {
    bigger = arr[index1]; smaller = arr[index];
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
  if (bigger === Number(answer)) {
    return [true, question, bigger, arr];
  }
  return [false, question, `${arr[index]} ${arr[index1]}`, arr, bigger];
};

export default isGcd;
