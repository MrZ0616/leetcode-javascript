/**
 * @param {String[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
let reverseString = function (s) {
  if (s === undefined || s.length === 0) return

  let left = 0
  let right = s.length - 1

  while (left < right) {
    let ch = s[left]
    s[left] = s[right]
    s[right] = ch
    left++
    right--
  }
}

reverseString(['h', 'e', 'l', 'l', 'o'])
