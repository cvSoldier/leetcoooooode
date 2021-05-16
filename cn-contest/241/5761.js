/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
  this.nums1 = nums1
  this.nums2 = nums2
  this.map1 = {}
  for(let i = 0; i < nums1.length; ++i) {
    const key = nums1[i]
    this.map1[key] ? this.map1[key]++ : this.map1[key] = 1
  }
  this.map2 = {}
  for(let i = 0; i < nums2.length; ++i) {
    const key = nums2[i]
    this.map2[key] ? this.map2[key]++ : this.map2[key] = 1
  }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
  const num = this.nums2[index]
  this.nums2[index] += val
  this.map2[num]--
  const key = this.nums2[index]
  this.map2[key] ? this.map2[key]++ : this.map2[key] = 1 
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
  let count = 0
  const keys = Object.keys(this.map1)
  for(let i = 0; i < keys.length; ++i) {
    const key = keys[i]
    const map2Key = tot - key
    if(this.map2[map2Key]) {
      count += this.map1[key] * this.map2[map2Key]
    }
  }
  return count
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */

 var obj = new FindSumPairs([1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4])
 console.log(obj.count(7))
 console.log(obj.add(3, 2))
 console.log(obj.count(8))
 console.log(obj.count(4))
 console.log(obj.add(0, 1))
 console.log(obj.add(1, 1))
 console.log(obj.count(7))