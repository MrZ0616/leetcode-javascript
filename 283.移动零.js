/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let j = 0 // 插入指针
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      if (j !== i) nums[i] = 0
      j++
    }
  }

  // console.log(nums)
};

moveZeroes([0, 1, 0, 3, 12])
moveZeroes([1])
