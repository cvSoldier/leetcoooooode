/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 *
 * https://leetcode.cn/problems/rotate-list/description/
 *
 * algorithms
 * Medium (41.64%)
 * Likes:    824
 * Dislikes: 0
 * Total Accepted:    276.1K
 * Total Submissions: 663K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[4,5,1,2,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [0,1,2], k = 4
 * 输出：[2,0,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 500] 内
 * -100 <= Node.val <= 100
 * 0 <= k <= 2 * 10^9
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  // 处理空链
  if(!head) return head

  let len = 1
  const startNode = new ListNode()
  startNode.next = head
  while(head.next) {
    head = head.next
    len++
  }
  k %= len

  head.next = startNode.next
  head = head.next

  while(k > 0) {
    head = head.next
    k--
  }
  console.log(head.val)
  startNode.next = head.next
  head.next = null
  return startNode.next
};

// 下面的用例会错，晕了已经，睡觉先
// console.log(rotateRight([1,2], 0))
// @lc code=end

