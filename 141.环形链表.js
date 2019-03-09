/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  while (head && head.next) {
    if (head.visted) {
      return true
    } else {
      head.visted = true
      head = head.next
    }
  }

  return false
}