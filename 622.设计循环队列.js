/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
const MyCircularQueue = function (k) {
  this.data = []
  this.k = k
  this.size = 0
  this.head = -1
  this.tail = -1
}

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  // 队列已满
  if (this.size === this.k) return false

  // 队列为空
  if (this.size === 0) this.head = 0

  this.tail = this.tail === this.k - 1 ? 0 : this.tail + 1
  this.size++
  this.data[this.tail] = value

  return true
}

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  // 队列已空
  if (this.size === 0) return false

  delete this.data[this.head]
  this.head = this.head === this.k - 1 ? 0 : this.head + 1
  this.size--

  // 队列已空
  if (this.size === 0) {
    this.head = -1
    this.tail = -1
  }

  return true
}

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.size === 0 ? -1 : this.data[this.head]
}

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.size === 0 ? -1 : this.data[this.tail]
}

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.size === 0
}

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.size === this.k
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

