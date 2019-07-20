/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  let init = Math.pow(10, digits) - 1;

  function isPalindrome(num) {
    let numToString = num.toString();
    const reverse = numToString
      .split("")
      .reverse()
      .join("");

    return numToString === reverse;
  }

  for (let i = init; i >= 0; i--) {
    for (let j = init; j >= 0; j--) {
      let value = i * j;
      if (isPalindrome(value) && palindromeNumber < value) {
        palindromeNumber = value;
        factor_0 = i;
        factor_1 = j;
      }
    }
  }

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};
