/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  let set = new Set(nums)
  return set.size !== nums.length
}

console.log(containsDuplicate([1, 2, 3, 1]))