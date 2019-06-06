// eslint-disable-next-line no-restricted-globals
const isNum = input => !isNaN(input);

const arrSum = arr => arr.reduce((a, b) => a + b, 0);

const calc = (input) => {
  if (input === '') return 0;
  if (isNum(input)) return Number(input);
  if (input.includes(',')) {
    let inputArr = input.split(',');
    inputArr = inputArr.map(s => Number(s));
    return arrSum(inputArr);
  }
  return 0;
};

module.exports = { calc };
