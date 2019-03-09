/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function (digits) {
  let carry = 0
  for (let i = digits.length - 1; i >= 0; i--) {
    let num = i === digits.length - 1 ? digits[i] + carry + 1 : digits[i] +
      carry
    digits[i] = num % 10
    carry = Math.floor(num / 10)
  }

  if (carry > 0) {
    digits.unshift(carry)
  }

  return digits
}

console.log(plusOne([4, 3, 2, 1]))
console.log(plusOne([4, 3, 2, 9]))
console.log(plusOne([9, 9, 9, 9]))
