const isEven = (arr, index) => {
  const number = arr[index];
  if (number % 2 !== 0) {
    return false;
  }
  return true;
};

export default isEven;
