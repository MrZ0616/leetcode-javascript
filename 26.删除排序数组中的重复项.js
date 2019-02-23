/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  if (nums === undefined || nums.length === 0) return 0

  let prev = nums[0]
  let j = 1 // 插入指针
  for (let i = 1; i < nums.length; i++) {
    if (prev !== nums[i]) {
      nums[j] = nums[i]
      prev = nums[i]
      j++
    }
  }

  return j
};

// console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
console.log(removeDuplicates([1, 2, 3]))
