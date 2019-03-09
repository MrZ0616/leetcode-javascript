/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const ListNode = require('./public/listnode')

const mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode()
  let prev = dummy

  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      prev.next = l1
      l1 = l1.next
    } else {
      prev.next = l2
      l2 = l2.next
    }
    prev = prev.next
  }

  prev.next = l1 ? l1 : l2

  return dummy.next
}