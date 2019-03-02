/**
 * @param {number} n
 * @return {number}
 * 动态规划
 * f(n) = min(f(n-1),f(n-4),f(n-9),f(n-16),...f(n - i^2)) + 1   1 <= i <= Math.floor(sqrt(n))
 */
const numSquares = function (n) {
  let arr = []
  arr[0] = 0
  arr[1] = 1
  arr[2] = 2
  arr[3] = 3

  for (let i = 4; i <= n; i++) {
    let min = Number.MAX_VALUE
    let top = Math.floor(Math.sqrt(i))
    for (let j = 1; j <= top; j++) {
      let pow2 = j * j
      min = Math.min(min, arr[i - pow2])
    }
    arr[i] = min + 1
  }

  return arr[n]
};

console.log(numSquares(12))
console.log(numSquares(13))
