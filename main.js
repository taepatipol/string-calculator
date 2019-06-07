// eslint-disable-next-line no-restricted-globals
const isNum = input => !isNaN(input);

const arrSum = arr => arr.reduce((a, b) => a + b, 0);

const calc = (input) => {
  if (input === '') return 0;
  else if (isNum(input)) return Number(input);
  else if (input.includes(',')) {
    let inputArr = input.split(',');
    inputArr = inputArr.map(s => Number(s));
    return arrSum(inputArr);
  } else if (input.includes('\n')) {
    let inputArr = input.split('\n');
    inputArr = inputArr.map(s => Number(s));
    return arrSum(inputArr);
  }
  return 0;
};

module.exports = { calc };
