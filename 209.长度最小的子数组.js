/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
let minSubArrayLen = function (s, nums) {
  let min = Number.MAX_VALUE

  for (let i = 0; i < nums.length; i++) {
    let sum = 0

    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum >= s) {
        min = j - i + 1 < min ? j - i + 1 : min
        break
      }
    }
  }

  min = min < Number.MAX_VALUE ? min : 0

  return min
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))