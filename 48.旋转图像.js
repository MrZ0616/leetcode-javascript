/**
 * @param {number[][]} matrix
 */
// 转置翻转
const rotate = function (matrix) {
  // 转置
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }

  // 翻转
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = matrix[i].reverse()
  }

  return matrix
}

console.log(rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))