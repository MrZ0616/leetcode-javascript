/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root, floor = 0, arr = []) {
  if (!root) return arr

  // 根节点
  if (arr[floor]) {
    arr[floor].push(root.val)
  } else {
    arr[floor] = [root.val]
  }

  levelOrder(root.left, floor + 1, arr)
  levelOrder(root.right, floor + 1, arr)

  return arr
};