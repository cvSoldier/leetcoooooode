/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (57.97%)
 * Likes:    2334
 * Dislikes: 0
 * Total Accepted:    645.7K
 * Total Submissions: 1.1M
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：digits = ""
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：digits = "2"
 * 输出：["a","b","c"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= digits.length <= 4
 * digits[i] 是范围 ['2', '9'] 的一个数字。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z']
  }
  const result = []
  helper('', digits, 0)
  return result

  function helper(cur, lastStr, index) {
    if(cur.length === digits.length && cur.length !== 0) {
      result.push(cur)
      return
    }
    for(let i = index; i < lastStr.length; ++i) {
      const curArr = map[lastStr[i]]
      for(let j = 0; j < curArr.length; ++j) {
        helper(cur + curArr[j], lastStr, i + 1)
      }
    }
  }
};
// @lc code=end

// 最近面试被问到了排列和组合的区别，写这道题的时候突然悟了，记录下心得：
// [1,2,3]的全排列：123，132，213，231，312，321
// [1,2,3]取两个数的组合方式：12，13，23
// 全排列的代码：
// `helper(cur + str[i], lastStr.slice(0, i) + lastStr.slice(i + 1))`
// 每次递归调用只是把当前的字符串扣掉

// 组合的代码：
// `helper(cur + curArr[j], lastStr, i + 1)`
// 每次调用，根据index来判断循环开始的index，来保证后加的字符串会越来越大，来保证“组合”