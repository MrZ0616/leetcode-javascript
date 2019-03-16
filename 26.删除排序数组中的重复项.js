/**
 * @param {number[]} nums
 * @return {number}
 * 双指针
 */
const removeDuplicates = function (nums) {
  if (!nums || nums.length === 0) return 0

  let j = 0 // 插入指针
  for (let i = 1; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      nums[++j] = nums[i]
    }
  }

  return j + 1
}

console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
console.log(removeDuplicates([1, 2, 3]))
