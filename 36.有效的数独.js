/**
 * @param {string[][]} board
 * @return {boolean}
 */
// 一次迭代
const isValidSudoku = function (board) {
  let rows = {}
  let cols = {}
  let boxes = {}

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j]
      if (num.toString() !== '.') {
        let boxIndex = Math.floor((i / 3)) * 3 + Math.floor((j / 3))
        if (rows[i + '-' + num] || cols[j + '-' + num] || boxes[boxIndex + '-' + num]) {
          return false
        }
        rows[i + '-' + num] = true
        cols[j + '-' + num] = true
        boxes[boxIndex + '-' + num] = true
      }
    }
  }

  return true
}

console.log(isValidSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
]))

