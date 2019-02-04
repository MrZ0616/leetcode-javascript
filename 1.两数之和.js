/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum1 = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let dif = target - nums[i]

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === dif) {
        return [i, j]
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum2 = function(nums, target) {
  let temp = []
  for (let i = 0; i < nums.length; i++) {
    let dif = target - nums[i]
    if (temp[dif] !== undefined) {
      return [temp[dif], i]
    }
    temp[nums[i]] = i
  }
};

console.log(twoSum1([2, 7, 11, 15], 9))
console.log(twoSum2([2, 7, 11, 15], 9))
