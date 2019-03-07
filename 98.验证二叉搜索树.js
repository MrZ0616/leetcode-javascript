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
const TreeNode = require("./public/treenode")

const isValidBST = function (root, min = -Infinity, max = Infinity) {
  if (!root) return true
  if (root.val <= min || root.val >= max) return false
  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
};

root = new TreeNode(5)
root.left = new TreeNode(1)
root.right = new TreeNode(7)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(8)

console.log(isValidBST(root))

