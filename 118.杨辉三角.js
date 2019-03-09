/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function (numRows) {
  if (numRows <= 0) return []

  let arr = [[1]]
  let row = 0
  let col = 0
  for (let i = 1; i < numRows; i++) {
    let arrRow = []
    for (let j = 0; j < i + 1; j++) {
      let upLeft = arr[i - 1][j - 1] === undefined ? 0 : arr[i - 1][j - 1]
      let upRight = arr[i - 1][j] === undefined ? 0 : arr[i - 1][j]
      arrRow.push(upLeft + upRight)
    }

    arr.push(arrRow)
  }

  return arr
}

console.log(generate(5))