/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//   let all = iter1 = iter2 =0
//   var heightest = Math.max.apply(null,height);
//   for(let i = 1; i < heightest; i++) { // 逐层遍历 感觉不太好
//     for(let j = 0; j < height.length; j++) {
//       if (height[j] === i && ) {
        
//       }
//     }
//   }
// };

// function fillister (arr) { // 不对 我只需要找数组里每次下去的值 
//   let result = 0
//   let baseLine = arr[0] <= arr[arr.length - 1] ? arr[0] : arr[arr.length - 1]
//   let difference
//   for(let i = 0; i < arr.length; i++) {
//     difference = baseLine - arr[i]
//     difference > 0 ? result += difference : null
//   }
//   return result
// }
// function isI_I (arr) {
//   let min = Math.min.apply(null,arr)
//   let max = Math.max.apply(null,arr)
//   return min < arr[0] && min < arr[arr.length - 1] && (max === arr[0] || max === arr[arr.length - 1])
// }
// module.exports = function(height) {
//   if(height.length < 3) {
//     return 0
//   }
//   let result = 0
//   for(let len = 3; len <= height.length; len++) {
//     let bigger = height[len] >= height[len - 1]
//     let thisTime = heigit[begin + len] >= height[height + len - 1]
    
//   }
//   return result
// };

// module.exports = function(height) { // 完美思路v1
//   let result = 0
//   const every_drop_down_dot_index = []
//   let bigger, smaller
//   for(let begin = 0; begin < height.length; begin++) {
//     bigger = (height[begin - 1] || 0) <= height[begin]
//     smaller = (height[begin + 1] || 0) < height[begin]
//     if (smaller && bigger) {
//       every_drop_down_dot_index.push(begin)
//     }
//   }
//   function fillister (arr) { 
//     let result = 0
//     let baseLine = arr[0] <= arr[arr.length - 1] ? arr[0] : arr[arr.length - 1]
//     let difference
//     for(let i = 0; i < arr.length; i++) {
//       difference = baseLine - arr[i]
//       difference > 0 ? result += difference : null
//     }
//     return result
//   }
//   for(let i = 0; i < every_drop_down_dot_index.length - 1; i++) {
//     result += fillister(height.slice(every_drop_down_dot_index[i], every_drop_down_dot_index[i + 1] + 1))
//   }
//   return result
// };


// module.exports = function(height) { // v2 错误示例[5,1,2,1,5]
//   let result = 0
//   let bigger, smaller, the_dot
//   for(let begin = 0; begin < height.length; begin++) {
//     bigger = (height[begin - 1] || 0) <= height[begin]
//     smaller = (height[begin + 1] || 0) < height[begin]
//     if (smaller && bigger) {
//       if (the_dot !== undefined) { // 可能为0
//         result += fillister(height.slice(the_dot, begin + 1))
//       }
//       the_dot = begin
//     }
//   }
//   function fillister (arr) {
//     let result = 0
//     let baseLine = arr[0] <= arr[arr.length - 1] ? arr[0] : arr[arr.length - 1]
//     let difference
//     for(let i = 0; i < arr.length; i++) {
//       difference = baseLine - arr[i]
//       difference > 0 ? result += difference : null
//     }
//     return result
//   }
//   return result
// };

// module.exports = function trap(height) { // 完美思路v3
//   function fillister (arr) { 
//     let result = 0
//     let baseLine = arr[0] <= arr[arr.length - 1] ? arr[0] : arr[arr.length - 1]
//     let difference
//     for(let i = 0; i < arr.length; i++) {
//       difference = baseLine - arr[i]
//       difference > 0 ? result += difference : null
//     }
//     return result
//   }
  
//   if(height.length < 3) {
//     return 0
//   }
//   let result = 0
//   const every_drop_down_dot_index = []
//   let bigger, smaller, minNum
//   debugger
//   for(let begin = 0; begin < height.length; begin++) {
//     bigger = (height[begin - 1] || 0) < height[begin]
//     smaller = (height[begin + 1] || 0) < height[begin]
//     if (smaller && bigger) {
//       every_drop_down_dot_index.push(begin)
//       if(every_drop_down_dot_index.length === 1) {
//         minNum = height[begin]
//       }
//       minNum > height[begin] ? minNum = height[begin] : null // 最小值
//     }
//   }

//   const arr = []   
//   let i
//   for(i = 0; i < every_drop_down_dot_index.length - 1; i++) {
//     result += fillister(height.slice(every_drop_down_dot_index[i], every_drop_down_dot_index[i + 1] + 1))
//     arr[every_drop_down_dot_index[i]] = height[every_drop_down_dot_index[i]]
//   }
//   arr[every_drop_down_dot_index[i]] = height[every_drop_down_dot_index[i]]
//   for(i = 0; i< arr.length; i++) { // 给最小值想法是好的，但是给的不对，测试用例[0,1,0,2,1,0,1,3,2,1,2,1,2]
//     if(!arr[i]) {
//       arr[i] = minNum
//     }
//   }
//   return result + trap(arr)  // 遍历的不对，还是没有脱离一层一层的思路，应该在求点的时候就嵌套调用
// };

module.exports = function trap(height) { // 完美思路v4
  function fillister (arr) { 
    let result = 0
    let baseLine = arr[0] <= arr[arr.length - 1] ? arr[0] : arr[arr.length - 1]
    let difference
    for(let i = 0; i < arr.length; i++) {6
      difference = baseLine - arr[i]
      difference > 0 ? result += difference : null
    }
    return result
  }
  function computeDropDownDot (values, keys = []) {
    debugger
    const every_drop_down_dot = {}
    let bigger, smaller
    for(let begin = 0; begin < values.length; begin++) {
      bigger = (values[begin - 1] || 0) <= values[begin]
      smaller = (values[begin + 1] || 0) <= values[begin]
      equal = (values[begin - 1] || 0) === (values[begin + 1] || 0)
      if (smaller && bigger && !equal) {
        every_drop_down_dot[keys.length === 0 ? begin : keys[begin]] = values[begin]
      }
    }
    let nowkeys = Object.keys(every_drop_down_dot)
    if(nowkeys.length < 2) {
      return keys
    } else {
      let nowValues = Object.values(every_drop_down_dot)
      if(Math.max.apply(null, nowValues) === Math.min.apply(null, nowValues)) {
        return nowkeys
      } else {
        return computeDropDownDot(nowValues, nowkeys)
      }
    }
  }
  
  if(height.length < 3) {
    return 0
  }
  let result = 0
  const indexArr = computeDropDownDot(height)
  for(let i = 0; i < indexArr.length - 1; i++) {
    result += fillister(height.slice(indexArr[i], Number(indexArr[i + 1]) + 1))
  }
  return result
};