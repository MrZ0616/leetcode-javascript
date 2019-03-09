/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const TreeNode = require('./public/treenode')

const sortedArrayToBST = function (nums) {
  if (!nums.length) return null

  let root = new TreeNode(null)
  if (nums.length > 1) {
    root.left = sortedArrayToBST(nums.splice(0, nums.length / 2))
  }
  root.val = nums[0]
  root.right = sortedArrayToBST(nums.splice(1))

  return root
}