const isNumInProgression = (arr, index, index1, index2, firstNum, secondNum, answer) => {
  if (arr[index] === Number(answer)) {
    return [true, index];
  }
  return [false, arr[index]];
};

export default isNumInProgression;
