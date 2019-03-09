/**
 * @param {number[]} nums
 * @return {number}
 */
let dominantIndex = function (nums) {
  let max = Number.MIN_VALUE
  let index = 0

  // 找出最大数
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
      index = i
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i !== index && max / nums[i] < 2) {
      return -1
    }
  }

  return index
}

console.log(dominantIndex([3, 6, 1, 0]))
console.log(dominantIndex([1, 2, 3, 4]))
