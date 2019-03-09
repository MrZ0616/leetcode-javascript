/**
 * @param {number[]} nums
 * @return {number}
 */
let arrayPairSum = function (nums) {
  nums.sort(((a, b) => a - b))

  let sum = 0
  for (let i = 0; i < nums.length; i = i + 2) {
    sum += nums[i]
  }

  return sum
}

console.log(arrayPairSum([1, 4, 3, 2]))
console.log(arrayPairSum([6214, -2290, 2833, -7908]))
