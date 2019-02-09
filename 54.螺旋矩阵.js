/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = function (matrix) {
  if (matrix.length === 0) return []

  let m = matrix.length
  let n = matrix[0].length
  let arr = []
  let direction = 'right'
  let rMax = n - 1
  let dMax = m - 1
  let lMin = 0
  let uMin = 0
  let row = 0
  let col = 0

  for (let i = 0; i < m * n; i++) {
    arr.push(matrix[row][col])
    switch (direction) {
      case 'right': {
        if (col < rMax) {
          col++
        } else {
          row++
          uMin++
          direction = 'down'
        }
        break
      }
      case 'down': {
        if (row < dMax) {
          row++
        } else {
          col--
          rMax--
          direction = 'left'
        }
        break
      }
      case 'left': {
        if (col > lMin) {
          col--
        } else {
          row--
          dMax--
          direction = 'up'
        }
        break
      }
      case 'up': {
        if (row > uMin) {
          row--
        } else {
          col++
          lMin++
          direction = 'right'
        }
        break
      }
      default: {
        break
      }
    }
  }

  return arr
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]))
