/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 *
 * https://leetcode.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (34.35%)
 * Likes:    1599
 * Dislikes: 1910
 * Total Accepted:    671.5K
 * Total Submissions: 2M
 * Testcase Example:  '"hello"\n"ll"'
 *
 * Implement strStr().
 * 
 * Return the index of the first occurrence of needle in haystack, or -1 if
 * needle is not part of haystack.
 * 
 * Example 1:
 * 
 * 
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * 
 * 
 * Clarification:
 * 
 * What should we return when needle is an empty string? This is a great
 * question to ask during an interview.
 * 
 * For the purpose of this problem, we will return 0 when needle is an empty
 * string. This is consistent to C's strstr() and Java's indexOf().
 * 
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// kmp会超时
// var strStr = function(haystack, needle) {
//   if(needle.length === 0) return 0
//   if(needle.length > haystack.length) return -1
//   function KMP(str) {
//     const partMatch = []
//     const prefix = []
//     const suffix = []
//     for(var i=0, len=str.length; i < len; i++){
//       var newStr = str.substring(0,i+1);
//       if(newStr.length == 1){
//         partMatch[i] = 0;
//       } else {
//         for(var k = 0; k < i; k++){
//           prefix[k] = newStr.slice(0,k + 1);
//           suffix[k] = newStr.slice(-k - 1);
//           if(prefix[k] == suffix[k]){
//             partMatch[i] = prefix[k].length;
//           }
//         }
//         if(!partMatch[i]){
//           partMatch[i] = 0;
//         }
//       }
//     }
//     prefix.length = 0;
//     suffix.length = 0;
//     return partMatch;
//   }
//   var partMatchValue = KMP(needle);
//   var result = false;
//   var matchLen = 0;
//   let index = -1
//   for(var i=0,j=haystack.length;i<j;i++){
//     for(var m=0,n=needle.length;m<n;m++){
//       if(needle.charAt(m) == haystack.charAt(i + m)){
//         if(m == needle.length - 1){
//           result = true;
//           index = i
//           break;
//         }
//         matchLen++;
//       } else {
//         if(m > 0 && partMatchValue[m-1] > 0){
//           i += (matchedLen-partMatchValue[m-1]);
//           i--
//         }
//         matchedLen = 0
//         break;
//       }
//     }
//     if(result){
//       break;
//     }
//   }
//   return index;
// };

// 憨憨解法 
// var strStr = function(haystack, needle) {
//   const len1 = haystack.length
//   const len2 = needle.length
//   if(len2 === 0) return 0
//   if(len2 > len1) return -1
//   for(let i = 0; i < len1; i++) {
//     for(let j = 0; j < len2; j++) {
//       if(haystack[i + j] === needle[j]) {
//         if(j === len2 - 1){
//           return i
//         }
//       } else {
//         break
//       }
//     }
//   }
//   return -1
// }

var strStr = function(haystack, needle) {
  if (needle == "") return 0;
  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[j]) {
      if (j == needle.length - 1) return i-j;
      j++;
    }
    else {
      i -= j, j = 0;
    }
  }
  return -1;
};
// console.log(strStr('headllo', 'dll'));
// @lc code=end

