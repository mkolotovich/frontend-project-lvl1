const isPrime = (arr, index) => {
  if (arr[index] < 2) {
    return [false, index];
  }
  for (let i = 2; i < arr[index] / 2; i += 1) {
    if (arr[index] % i === 0) {
      return [false, index];
    }
  }
  return [true, index];
};

export default isPrime;
