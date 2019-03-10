/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const isBadVersion = function (version) {
  return version >= 3
}

// 二分搜索
const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1, right = n

    while (left < right) {

      // 取左中位数
      let mid = Math.floor((left + right) / 2)

      // 如果左中位数不是第一个错误版本
      if (!isBadVersion(mid)) {
        left = mid + 1
      } else {
        right = mid
      }
    }

    return left
  }
}

console.log(solution(isBadVersion)(100))