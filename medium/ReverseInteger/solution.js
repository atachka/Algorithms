var reverse = function (x) {
  const max = Math.pow(2, 31);

  let isNegative = 1;
  if (x < 0) {
    isNegative = -1;
    x = x * -1;
  }

  let num = 0;

  while (x !== 0) {
    num = num * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  if (num >= max - 1 || num <= -max - 1) {
    return 0;
  }
  return num * isNegative;
};
