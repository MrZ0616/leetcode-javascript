/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  if (nums === undefined || nums.length === 0) return

  for (let j = 0; j < k; j++) {
    // 向右旋转一位
    let last = nums[nums.length - 1]
    for (let i = nums.length - 1; i > 0; i--) {
      nums[i] = nums[i - 1]
    }
    nums[0] = last
  }
};