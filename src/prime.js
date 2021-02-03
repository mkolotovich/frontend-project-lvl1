const prime = (arr, index) => {
  const dividers = [2];
  const lastDivider = Math.floor(Math.sqrt(arr[index]));
  for (let i = 0; i < dividers.length; i += 1) {
    if (dividers[i] < lastDivider) {
      dividers.push(dividers[i] + 1);
    }
    if (arr[index] % dividers[i] !== 0) {
      return true;
    }
  }
  return false;
};

export default prime;
