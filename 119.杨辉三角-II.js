/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {

  let arr = [1]

  for (let i = 0; i < rowIndex; i++) {
    arr.unshift(0)

    for (let j = 0; j < arr.length - 1; j++) {
      arr[j] = arr[j] + arr[j + 1]
    }
  }

  return arr
}

console.log(getRow(5))