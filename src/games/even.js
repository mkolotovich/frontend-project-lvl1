const isEven = (arr, index) => {
  const number = arr[index];
  if (number % 2 !== 0) {
    return [false, index, arr[index]];
  }
  return [true, index, arr[index]];
};

export default isEven;
