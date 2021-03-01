const isNumInProgression = (num, answer) => {
  if (num === Number(answer)) {
    return [true];
  }
  return [false, num];
};

const checkProgression = (index, index1, index2, answer) => {
  const arr = [5, 7, 9, 11, 13, 15, 17, 19, 21, 23];
  const modifyedNumbers = arr.slice();
  modifyedNumbers[index] = '..';
  const progression = modifyedNumbers.join(' ');
  return [isNumInProgression(arr[index], answer)[0], progression, arr, arr[index], arr];
};

export default checkProgression;
