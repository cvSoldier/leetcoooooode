/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let n = lists.length
  if(!n) return null
  let merge = function(begin, end) {
    if(begin === end) return lists[begin]
    let mid = (begin + end) >> 1
    let l1 = merge(begin, mid)
    let l2 = merge(mid + 1, end)
    return mergeTwoLists(l1, l2)
  }
  return merge(0, n - 1)
};
var mergeTwoLists = function(l1, l2) {
  let head = result = new ListNode(null)
  while(l1 && l2) {
    if(l1.val < l2.val) {
      result.next = l1
      l1 = l1.next
    } else {
      result.next = l2
      l2 = l2.next
    }
    result = result.next
  }
  result.next = l1 || l2
  return head.next
};
// @lc code=end

