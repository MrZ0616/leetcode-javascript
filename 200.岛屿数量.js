/**
 * @param {string[][]} grid
 * @return {number}
 * DFS
 */
const numIslands = function (grid) {
  if (grid === undefined || grid.length === 0 || grid[0].length === 0) return 0

  let row = grid.length
  let col = grid[0].length

  let visited = []
  for (let i = 0; i < row; i++) {
    visited[i] = new Array(col).fill(false)
  }

  // 上下左右
  let direction = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  let count = 0

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!visited[i][j] && grid[i][j] === '1') {
        count++
        dfs(i, j)
      }
    }
  }

  function dfs(i, j) {
    visited[i][j] = true
    for (let k = 0; k < direction.length; k++) {
      let iNew = i + direction[k][0]
      let jNew = j + direction[k][1]

      if (isValid(iNew, jNew) && !visited[iNew][jNew] && grid[iNew][jNew] === '1') {
        dfs(iNew, jNew)
      }
    }
  }

  // 坐标是否合法
  function isValid(i, j) {
    return i >= 0 && i < row && j >= 0 && j < col
  }

  return count
};

console.log(numIslands([['1']]))
console.log(numIslands([['1', '1', '0', '0', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '1', '0', '0'], ['0', '0', '0', '1', '1']]))

