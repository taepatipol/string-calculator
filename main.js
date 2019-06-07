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
  } else if (input.includes('\n') || input.includes(',')) {
    const separators = ['\n', ','];
    const num = input.split(new RegExp(separators.join('\n'), ','));
    let sum = 0;
    for (let i = 0; i < num.length; i += 1) {
      sum += num[i];
    }
    return sum;
  }
  return 0;
};

module.exports = { calc };
