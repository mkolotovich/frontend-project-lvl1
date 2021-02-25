const isEven = (index) => {
  const arr = [15, 6, 7];
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  const number = arr[index];
  if (number % 2 !== 0) {
    return [false, question, arr[index], arr];
  }
  return [true, question, arr[index], arr];
};

export default isEven;
