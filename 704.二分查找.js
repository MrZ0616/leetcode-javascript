/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    // 取左中位数
    let mid = Math.floor((left + right) / 2)

    //则优先排除左中位数
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return nums[left] === target ? left : -1
}

const search1 = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    // 取右中位数
    let mid = Math.floor((left + right + 1) / 2)

    // 优先排除右中位数
    if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid
    }
  }

  return nums[left] === target ? left : -1
}

console.log(search1([-1, 0, 3, 5, 9, 12], -1))
console.log(search1([-1, 0, 3, 5, 9, 12], 12))
console.log(search1([-1, 0, 3, 5, 9, 12], 22))
