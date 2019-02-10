/**
 * @param {string[]} strs
 * @return {string}
 */
// 超出显示时间
let longestCommonPrefix = function (strs) {
  if (strs === undefined || strs.length === 0) return ''

  let minLength = Number.MAX_VALUE
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < minLength) {
      minLength = strs[i].length
    }
  }

  let prefix = ''

  for (let i = 0; i < minLength; i++) {
    let ch = strs[0].substr(i, 1)
    let flag = true

    for (let j = 1; j < strs.length; j++) {
      if (ch !== strs[j].substr(i, 1)) {
        flag = false
        break
      }
    }

    if (!flag) {
      break
    }

    prefix += ch
  }

  return prefix
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "dog", "dog"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
console.log(longestCommonPrefix([]))
console.log(longestCommonPrefix(["aca","cba"]))
