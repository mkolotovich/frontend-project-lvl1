const isPrime = (arr, index) => {
  if (arr[index] < 2) {
    return [false, arr[index], arr[index]];
  }
  for (let i = 2; i < arr[index] / 2; i += 1) {
    if (arr[index] % i === 0) {
      return [false, arr[index], arr[index]];
    }
  }
  return [true, arr[index], arr[index]];
};

export default isPrime;
