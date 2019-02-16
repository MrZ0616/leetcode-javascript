/**
 * @param {number[]} nums
 * @return {number}
 */
let findMaxConsecutiveOnes = function (nums) {
  let max = 0
  let j = -1

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 1) {
      j = i
    } else {
      max = i - j > max ? i - j : max
    }
  }

  return max
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))
console.log(findMaxConsecutiveOnes([1, 1, 1, 1, 1, 1]))
