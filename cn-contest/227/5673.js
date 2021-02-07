/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
  const arr = [a, b, c]
  // while(
  //   !(a === 0 && b === 0 ||
  //   a === 0 && c === 0 ||
  //   b === 0 && c === 0)
  // ) {
  //   for(let i = 0; i < arr.length; ++i) {
      
  //   }
  //   result++
  // }

  // let min = Math.min.apply(null, arr)
  // let minIndex = arr.indexOf(min)
  // let max = Math.max.apply(null, arr)
  // let maxIndex = arr.indexOf(max)
  // let midIndex
  // let arr = [0, 1, 2]
  // arr.map(i => {
  //   if(i !== minIndex && i != maxIndex) {
  //     midIndex = i
  //   }
  // })
  // let 

  arr.sort((a, b) => a - b)
  if(arr[0] <= arr[2] - arr[1]) {
    return arr[0] + arr[1]
  } else {
    return arr[0] + (arr[1] -Math.ceil((arr[0] - (arr[2] - arr[1])) / 2)) 
  }
};
console.log(maximumScore(2,4,6))
console.log(maximumScore(4,4,6))
console.log(maximumScore(1,8,8))