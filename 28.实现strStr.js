/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function (haystack, needle) {
  return haystack.indexOf(needle)
};

console.log(strStr('hello', 'll'))
console.log(strStr('aaaaa', 'bba'))

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 暴力算法
 */
let strStr1 = function (haystack, needle) {

  if (haystack.length === 0 && needle.length === 0) return 0

  for (let i = 0; i < haystack.length; i++) {
    let j
    for (j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break
      }
    }

    if (j === needle.length) return i
  }

  return -1
};

console.log(strStr1('hello', 'll'))
console.log(strStr1('aaaaa', 'bba'))

