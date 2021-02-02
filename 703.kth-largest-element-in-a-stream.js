/*
 * @lc app=leetcode id=703 lang=javascript
 *
 * [703] Kth Largest Element in a Stream
 *
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/description/
 *
 * algorithms
 * Easy (49.89%)
 * Likes:    1078
 * Dislikes: 639
 * Total Accepted:    117.6K
 * Total Submissions: 232.4K
 * Testcase Example:  '["KthLargest","add","add","add","add","add"]\n' +
  '[[3,[4,5,8,2]],[3],[5],[10],[9],[4]]'
 *
 * Design a class to find the k^th largest element in a stream. Note that it is
 * the k^th largest element in the sorted order, not the k^th distinct
 * element.
 * 
 * Implement KthLargest class:
 * 
 * 
 * KthLargest(int k, int[] nums) Initializes the object with the integer k and
 * the stream of integers nums.
 * int add(int val) Returns the element representing the k^th largest element
 * in the stream.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input
 * ["KthLargest", "add", "add", "add", "add", "add"]
 * [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
 * Output
 * [null, 4, 5, 5, 8, 8]
 * 
 * Explanation
 * KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
 * kthLargest.add(3);   // return 4
 * kthLargest.add(5);   // return 5
 * kthLargest.add(10);  // return 5
 * kthLargest.add(9);   // return 8
 * kthLargest.add(4);   // return 8
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= k <= 10^4
 * 0 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * -10^4 <= val <= 10^4
 * At most 10^4 calls will be made to add.
 * It is guaranteed that there will be at least k elements in the array when
 * you search for the k^th element.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k
  this.nums = []
  for(let i = 0; i < nums.length; ++i) {
    this.add(nums[i])
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  //不能用最大堆 要用最小堆
  if(this.nums.length >= this.k) {
    if(this.nums[0] < val) {
      this.nums[0] = val
      let parent = 0
      let temp = this.nums[parent]
      let child = 2 * parent + 1
      while(child < this.nums.length) {
        if(child < this.nums.length - 1) {
          if(this.nums[child + 1] < this.nums[child]) {
            child++
          }
        }
        if(this.nums[child] < temp) {
          this.nums[parent] = this.nums[child]
          parent = child
          child = 2 * parent + 1
        } else {
          break
        }
      }
      this.nums[parent] = temp
    }
  } else {
    this.nums.push(val)
    
    let childIndex = this.nums.length - 1
    let parentIndex = (childIndex - 1) >>> 1
    let temp = this.nums[childIndex]
    while(temp < this.nums[parentIndex]) {
      this.nums[childIndex] = this.nums[parentIndex]
      childIndex = parentIndex
      parentIndex = (parentIndex - 1) >>> 1
    }
    this.nums[childIndex] = temp
  }
  return this.nums[0]
};
// let kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// kthLargest.add(3);   // return 4
// console.log(kthLargest.nums);
// kthLargest.add(5);   // return 5
// console.log(kthLargest.nums);
// kthLargest.add(10);  // return 5
// console.log(kthLargest.nums);
// kthLargest.add(9);   // return 8
// console.log(kthLargest.nums);
// kthLargest.add(4);   // return 8
// console.log(kthLargest.nums);

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

