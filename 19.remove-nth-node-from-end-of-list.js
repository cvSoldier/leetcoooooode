/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let begin = last = head

  while(n--) {
    last = last.next
  }
  if(last) {
    while(last.next) {
      last = last.next
      begin = begin.next
    }
    begin.next = begin.next.next
    return head
  } else {
    return null
  }
}
// @lc code=end

