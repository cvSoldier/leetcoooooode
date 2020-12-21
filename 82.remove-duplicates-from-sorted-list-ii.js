/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (37.13%)
 * Likes:    2103
 * Dislikes: 114
 * Total Accepted:    274.1K
 * Total Submissions: 729.8K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * Given a sorted linked list, delete all nodes that have duplicate numbers,
 * leaving only distinct numbers from the original list.
 * 
 * Return the linked list sorted as well.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2->3->3->4->4->5
 * Output: 1->2->5
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 1->1->1->2->3
 * Output: 2->3
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
 * @return {ListNode}
 */

var deleteDuplicates = function(head) {
  let preHead = new ListNode('#', head)
  let ppreHead = new ListNode(0, preHead)
  let repeat = false
  while(preHead.next && preHead.next.next) {
    while(preHead.next.next && preHead.next.val === preHead.next.next.val) {
      preHead.next = preHead.next.next
      repeat = true
    }
    if(repeat) {
      preHead.next = preHead.next.next
      repeat = false
    } else {
      preHead = preHead.next
    }
  }
  return ppreHead.next.next
};
// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }
// var arr = [1,1,1,1,1]
// var arr = [1,1,1,2,3]
// var arr = [1,1,1,2,3,3,3]
// for(let len = arr.length - 1; len >= 0; --len) {
//   arr[len] = new ListNode(arr[len], arr[len + 1])
// }
// console.log(deleteDuplicates(arr[0]))
// @lc code=end
