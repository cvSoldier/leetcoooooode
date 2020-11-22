// https://leetcode-cn.com/problems/smallest-string-with-a-given-numeric-value/

var getSmallestString = function(n, k) {
  const map = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
              'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  // let aNum = 0
  // while(true) {
  //   debugger
  //   let temp = (k / (27 / 2))
  //   if(temp <= n || n == 1 || (k - 27 < 26 * (n - 2)) ) break
  //   k = k - 27
  //   n -= 2
  //   aNum++
  // }
  // let result = ''
  // for(let i = 0; i < aNum; ++i) {
  //   result += 'a'
  // }
  // let centerNum = n
  // while(centerNum) {
  //   if(centerNum != 1) {
  //     result += 'a'
  //     k--
  //   } else {
  //     result += map[k - 1]
  //   }
  //   centerNum--
  // }
  // for(let i = 0; i < aNum; ++i) {
  //   result += 'z'
  // }
  // return result
  let result = new Array(n).fill('')
  for(let len = n - 1; len >= 0; --len) {
    if(k - (len) >= 26) {
      result[len] = 'z'
      k -= 26
    } else {
      // debugger
      result[len] = map[k - len - 1]
      k -= (k - len)
    }
  }
  return result.join('')
};
console.log(getSmallestString(4, 100));
console.log(getSmallestString(5, 73));
console.log(getSmallestString(3, 27));