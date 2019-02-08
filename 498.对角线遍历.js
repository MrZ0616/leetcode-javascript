/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// @see https://leetcode-cn.com/problems/diagonal-traverse/solution/498dui-jiao-xian-bian-li-by-zhangll/
let findDiagonalOrder = function (matrix) {
  if (matrix.length === 0) return []

  let arr = []
  let m = matrix.length
  let n = matrix[0].length
  let up = true
  let row = 0
  let col = 0

  for (let i = 0; i < m * n; i++) {
    arr.push(matrix[row][col])

    if (up) {
      if (row === 0 && col < n - 1) {
        col += 1
        up = false
      } else if (col === n - 1) {
        row += 1
        up = false
      } else {
        row -= 1
        col += 1
      }
    } else {
      if (col === 0 && row < m - 1) {
        row += 1
        up = true
      } else if (row === m - 1) {
        col += 1
        up = true
      } else {
        row += 1
        col -= 1
      }
    }
  }

  return arr
};

console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))