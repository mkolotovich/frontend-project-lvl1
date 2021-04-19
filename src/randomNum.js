const getRandomNum = (min, max) => {
  const minimal = Math.ceil(min);
  const maximal = Math.floor(max);
  return Math.floor(Math.random() * (maximal - minimal)) + minimal;
};

export default getRandomNum;
