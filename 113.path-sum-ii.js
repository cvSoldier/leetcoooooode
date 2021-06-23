/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
 *
 * https://leetcode.com/problems/path-sum-ii/description/
 *
 * algorithms
 * Medium (50.16%)
 * Likes:    2962
 * Dislikes: 84
 * Total Accepted:    428.2K
 * Total Submissions: 851.1K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
 *
 * Given the root of a binary tree and an integer targetSum, return all
 * root-to-leaf paths where each path's sum equals targetSum.
 * 
 * A leaf is a node with no children.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * Output: [[5,4,11,2],[5,8,4,5]]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [1,2,3], targetSum = 5
 * Output: []
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: root = [1,2], targetSum = 0
 * Output: []
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the tree is in the range [0, 5000].
 * -1000 <= Node.val <= 1000
 * -1000 <= targetSum <= 1000
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const res = []
  helper(root, targetSum, [], res)
  return res
};
function helper(node, target, cur, res) {
  if(!node) return
  cur.push(node.val)
  if(node.val === target && !node.left && !node.right) {
    res.push(cur.slice())
    return
  }
  helper(node.left, target - node.val, cur.slice(), res)
  helper(node.right, target - node.val, cur.slice(), res)
}
// @lc code=end

