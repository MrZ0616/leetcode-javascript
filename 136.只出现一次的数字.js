/**
 * @param {number[]} nums
 * @return {number}
 */
// 位操作 异或
const singleNumber = function (nums) {
  let a = 0
  for (const num of nums) {
    a ^= num
  }
  return a
}

console.log(singleNumber([4, 1, 2, 1, 2]))