const isNumInProgression = (index, index1, index2, answer) => {
  const arr = [5, 7, 9, 11, 13, 15, 17, 19, 21, 23];
  const question = 'What number is missing in the progression?';
  const modifyedNumbers = arr.slice();
  modifyedNumbers[index] = '..';
  const progression = modifyedNumbers.join(' ');
  if (arr[index] === Number(answer)) {
    return [true, question, progression, arr];
  }
  return [false, question, progression, arr, arr[index]];
};

export default isNumInProgression;
