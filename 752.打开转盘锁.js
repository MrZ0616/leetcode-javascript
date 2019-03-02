/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 * BFS
 */
const openLock = function (deadends, target) {
  if (target === undefined) return -1

  let start = '0000'
  if (deadends.includes(target) || deadends.includes(start)) return -1

  let queue = []
  let visited = new Set(deadends)
  let step = 0

  queue.push(start)
  visited.add(start)

  while (queue.length > 0) {
    for (let i = queue.length; i > 0; i--) {
      let current = queue.shift()
      if (target === current) return step

      let nexts = getNexts(current)
      for (const next of nexts) {
        if (!deadends.includes(next) && !visited.has(next)) {
          visited.add(next)
          queue.push(next)
        }
      }
    }

    step++
  }

  function getNexts(current) {
    let arr = []
    for (let i = 0; i < 4; i++) {
      let arrCurrent = current.split('')
      let num = Number(arrCurrent[i])

      // 加1
      let numPlus = num + 1
      numPlus %= 10
      arrCurrent[i] = numPlus.toString()
      arr.push(arrCurrent.join(''))

      // 减1
      let numSub = num - 1
      numSub = numSub === -1 ? 9 : numSub
      arrCurrent[i] = numSub.toString()
      arr.push(arrCurrent.join(''))
    }

    return arr
  }

  return -1
};

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"))
console.log(openLock(["8888"], "0009"))