const isPrime = (index) => {
  const arr = [3, 5, 6, 7];
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  if (arr[index] < 2) {
    return [false, arr[index], arr[index]];
  }
  for (let i = 2; i < arr[index] / 2; i += 1) {
    if (arr[index] % i === 0) {
      return [false, question, arr[index], arr];
    }
  }
  return [true, question, arr[index], arr];
};

export default isPrime;
