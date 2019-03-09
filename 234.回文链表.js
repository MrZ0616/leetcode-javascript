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
const isPalindrome = function (head) {
  let vals = []

  while (head) {
    vals.push(head.val)
    head = head.next
  }

  while (vals.length > 1) {
    if (vals.shift() !== vals.pop()) return false
  }

  return true
}