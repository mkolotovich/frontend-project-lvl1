const isEven = (arr, index) => {
  const number = arr[index];
  if (number % 2 !== 0) {
    return [false, index];
  }
  return [true, index];
};

export default isEven;
