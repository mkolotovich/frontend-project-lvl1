const isEven = (number) => {
  if (number % 2 !== 0) {
    return false;
  }
  return true;
};

const checkNumIsEven = (index) => {
  const arr = [15, 6, 7];
  return [isEven(arr[index]), arr[index], arr];
};

export default checkNumIsEven;
