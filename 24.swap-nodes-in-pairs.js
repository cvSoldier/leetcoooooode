/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }
// var head = new ListNode(1)
// head.next = new ListNode(2)
// head.next.next = new ListNode(3)
// head.next.next.next = new ListNode(4)
// head.next.next.next.next = new ListNode(5)

var swapPairs = function(head) {
  var pre = new ListNode(null)
  pre.next = head
  var temp = pre
  while(temp.next && temp.next.next) {
    var first = temp.next
    var second = temp.next.next
    temp.next = second
    first.next = second.next
    second.next = first
    temp = first
  }
  return pre.next
};
// var ans = swapPairs(head)
// console.log(ans.val, ans.next.val, ans.next.next.val, ans.next.next.next.val,ans.next.next.next.next.val);

// @lc code=end
