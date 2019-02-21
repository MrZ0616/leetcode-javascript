/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  let arr = s.split(' ')
  let arrR = []

  for (let i = 0; i < arr.length; i++) {
    arrR.push(arr[i].split('').reverse().join(''))
  }

  return arrR.join(' ')
};

console.log(reverseWords('Let\'s take LeetCode contest'))