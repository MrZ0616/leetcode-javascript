/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {
  if (root === null) return true

  function dfs (left, right) {
    if (left === null && right === null) return true
    if (!(left !== null && right !== null)) return false
    if (left.val !== right.val) return false

    return dfs(left.left, right.right) && dfs(left.right, right.left)
  }

  return dfs(root.left, root.right)
}