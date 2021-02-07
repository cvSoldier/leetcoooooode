/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 我脑子怕不是被驴踢了 这写的是个 p
// var check = function(nums) {
//   const arr = []
//   let min = Math.min.apply(null, nums)
//   let minArr = []
//   for(let i = 0; i < nums.length; ++i) {
//     arr[i] = nums[i]
//     if(arr[i] === min) {
//       minArr.push(i)
//     }
//   }
//   nums.sort((a, b) => a - b)
//   let OK = false
//   debugger
//   for(let i = 0; i < minArr.length; ++i) {
//     let beginIndex = minArr[i]
//     for(let i = 0; i < nums.length; ++i) {
//       if(nums[i] === arr[beginIndex]) {
//         if(i === nums.length - 1) {
//           OK = true
//         }
//         if(++beginIndex >= nums.length) {
//           beginIndex -= nums.length
//         }
//       } else {
//         break
//       }
//     }
//     if(OK) return true
//   }
//   return false
// };
var check = function(nums) {
  let count = 0
  nums.push(nums[0])
  for(let i = 0; i < nums.length - 1; ++i) {
    if(nums[i] > nums[i + 1]) {
      if(++count > 1) return false
    }
  }
  return true
}

console.log(check([3,4,5,1,1,2]))
console.log(check([3,4,5,1,3,1,2]))

console.log(check([1,1,1]))
console.log(check([6,10,6]))