const isEven = (number) => {
  if (number % 2 !== 0) {
    return false;
  }
  return true;
};

const checkNumIsEven = (index) => {
  const arr = [15, 6, 7];
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  return [isEven(arr[index]), question, arr[index], arr];
};

export default checkNumIsEven;
