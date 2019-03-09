/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = function (a, b) {
  let arr = []
  let carry = 0
  let arrA = a.split('').reverse()
  let arrB = b.split('').reverse()
  let max = a.length > b.length ? a.length : b.length

  for (let i = 0; i < max; i++) {
    let numA = arrA[i] === undefined ? 0 : Number(arrA[i])
    let numB = arrB[i] === undefined ? 0 : Number(arrB[i])
    let num = numA + numB + carry
    carry = Math.floor(num / 2)
    arr.push(num % 2)
  }

  if (carry === 1) {
    arr.push(carry)
  }

  return arr.reverse().join('')
}

console.log(addBinary('11', '1'))
console.log(addBinary('1010', '1011'))
