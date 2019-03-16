/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 哈希
const intersect = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    intersect(nums2, nums1)
  }

  let hash = new Map()
  for (const num of nums1) {
    if (hash.has(num)) {
      hash.set(num, hash.get(num) + 1)
    } else {
      hash.set(num, 1)
    }
  }

  let ans = []
  for (const num of nums2) {
    if (hash.has(num) && hash.get(num) > 0) {
      ans.push(num)
      hash.set(num, hash.get(num) - 1)
    }
  }

  return ans
}

console.log(intersect([1, 2, 2, 1], [2, 2]))