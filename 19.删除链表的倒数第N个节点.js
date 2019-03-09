/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const ListNode = require('./public/listnode')

const removeNthFromEnd = function (head, n) {
  let dummy = new ListNode()
  dummy.next = head

  // 双指针
  let slow = dummy, fast = dummy

  for (let i = 0; i < n; i++) {
    fast = fast.next
  }

  while (fast.next != null) {
    slow = slow.next
    fast = fast.next
  }

  slow.next = slow.next.next
  return dummy.next
}