const getRandomIndex = (arr, length = arr.length) => {
  if (length === arr.length) {
    return Math.floor(Math.random() * Math.floor(arr.length));
  }
  return Math.floor(Math.random() * Math.floor(length));
};

export default getRandomIndex;
