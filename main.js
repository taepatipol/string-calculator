// eslint-disable-next-line no-restricted-globals
const isNum = input => !isNaN(input);

const arrSum = arr => arr.reduce((a, b) => a + b, 0);

const check1000 = (num) => {
  if (num > 1000) return 0;
  if (num < 0) throw new Error('negative');
  return num;
};

const calc = (input) => {
  if (input === '') return 0;
  else if (isNum(input)) {
    const num = Number(input);
    return check1000(num);
  }
  const nums = input.split('\n').join(',').split(',').map(s => check1000(Number(s)));
  return arrSum(nums);
};

module.exports = { calc };
