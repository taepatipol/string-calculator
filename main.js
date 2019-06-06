const isNum = input => !isNaN(input);

const calc = (input) => {
  if (input === '') return 0;
  if (isNum(input)) return Number(input);
  return 0;
};

module.exports = { calc };
