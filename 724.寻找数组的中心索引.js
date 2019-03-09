/**
 * @param {number[]} nums
 * @return {number}
 */
let pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let lSum = 0
    let rSum = 0

    for (let j = 0; j < i; j++) {
      lSum += nums[j]
    }

    for (let j = i + 1; j < nums.length; j++) {
      rSum += nums[j]
    }

    if (lSum === rSum) {
      return i
    }
  }

  return -1
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1, 2, 3]))
