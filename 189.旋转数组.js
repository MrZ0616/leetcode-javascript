/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 暴力
const rotate = function (nums, k) {
  if (!nums || nums.length === 0) return

  for (let j = 0; j < k; j++) {
    // 向右旋转一位
    let last = nums[nums.length - 1]
    for (let i = nums.length - 1; i > 0; i--) {
      nums[i] = nums[i - 1]
    }
    nums[0] = last
  }
}

// 环状替换
const rotate1 = function (nums, k) {
  if (!nums || nums.length === 0) return

  k = k % nums.length
  let count = 0

  for (let starIndex = 0; count < nums.length; starIndex++) {
    let currIndex = starIndex
    let prev = nums[starIndex]

    do {
      let nextIndex = (currIndex + k) % nums.length
      let temp = nums[nextIndex]
      nums[nextIndex] = prev
      prev = temp
      currIndex = nextIndex
      count++
    } while (starIndex !== currIndex)
  }

  return nums
}

console.log(rotate1([1, 2, 3, 4, 5, 6], 2))
console.log(rotate1([1, 2, 3, 4, 5, 6, 7], 2))
