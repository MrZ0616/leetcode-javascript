/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  let arr = s.split(' ')
  let arrR = []


  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '') {
      continue
    }

    arrR.unshift(arr[i].split('').join(''))
  }

  return arrR.join(' ')
};

console.log(reverseWords('the sky is blue'))
console.log(reverseWords('  hello world!  '))
