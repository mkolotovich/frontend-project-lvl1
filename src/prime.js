const prime = (arr, index, answer) => {
  if (arr[index] % arr[index] === 0 && arr[index] % 1 === 0 && answer === 'yes') {
    return true;
  }
  return false;
};

export default prime;
