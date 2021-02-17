const isNumInProgression = (arr, index, index1, index2, firstNum, secondNum, answer) => {
  const modifyedNumbers = arr.slice();
  modifyedNumbers[index] = '..';
  const progression = modifyedNumbers.join(' ');
  if (arr[index] === Number(answer)) {
    return [true, index];
  }
  return [false, arr[index], progression];
};

export default isNumInProgression;
