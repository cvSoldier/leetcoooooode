/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 *
 * https://leetcode.com/problems/valid-sudoku/description/
 *
 * algorithms
 * Medium (46.31%)
 * Likes:    1738
 * Dislikes: 454
 * Total Accepted:    374.2K
 * Total Submissions: 768.2K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be
 * validated according to the following rules:
 * 
 * 
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without
 * repetition.
 * 
 * 
 * 
 * A partially filled sudoku which is valid.
 * 
 * The Sudoku board could be partially filled, where empty cells are filled
 * with the character '.'.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * ⁠ ["5","3",".",".","7",".",".",".","."],
 * ⁠ ["6",".",".","1","9","5",".",".","."],
 * ⁠ [".","9","8",".",".",".",".","6","."],
 * ⁠ ["8",".",".",".","6",".",".",".","3"],
 * ⁠ ["4",".",".","8",".","3",".",".","1"],
 * ⁠ ["7",".",".",".","2",".",".",".","6"],
 * ⁠ [".","6",".",".",".",".","2","8","."],
 * ⁠ [".",".",".","4","1","9",".",".","5"],
 * ⁠ [".",".",".",".","8",".",".","7","9"]
 * ]
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * [
 * ["8","3",".",".","7",".",".",".","."],
 * ["6",".",".","1","9","5",".",".","."],
 * [".","9","8",".",".",".",".","6","."],
 * ["8",".",".",".","6",".",".",".","3"],
 * ["4",".",".","8",".","3",".",".","1"],
 * ["7",".",".",".","2",".",".",".","6"],
 * [".","6",".",".",".",".","2","8","."],
 * [".",".",".","4","1","9",".",".","5"],
 * [".",".",".",".","8",".",".","7","9"]
 * ]
 * Output: false
 * Explanation: Same as Example 1, except with the 5 in the top left corner
 * being 
 * ⁠   modified to 8. Since there are two 8's in the top left 3x3 sub-box, it
 * is invalid.
 * 
 * 
 * Note:
 * 
 * 
 * A Sudoku board (partially filled) could be valid but is not necessarily
 * solvable.
 * Only the filled cells need to be validated according to the mentioned
 * rules.
 * The given board contain only digits 1-9 and the character '.'.
 * The given board size is always 9x9.
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
// var isValidSudoku = function(board) {
//   function hasRepeatNum(nums) {
//     var map = {}
//     for(let i = 0; i < board.length; i++) {
//       if(map[nums[i]] && nums[i] !== '.') return true
//       map[nums[i]] = true
//     }
//     return false
//   }
//   let isValid = false

//   for(let i = 0; i < board.length; i++) {
//     isValid = isValid || hasRepeatNum(board[i])
//   }
//   var arr = []
//   for(let i = 0; i < board.length; i++) {
//     if(!isValid) {
//       for(let j = 0; j < board.length; j++) {
//         arr.push(board[j][i])
//       }
//       isValid = hasRepeatNum(arr)
//     }
//     arr.length = 0
//   }
//   for(let i = 0; i < board.length; i += 3) {
//     for(let j = 0; j < board.length; j += 3) {
//       if(!isValid) {
//         arr = [
//           board[i][j], board[i][j + 1], board[i][j + 2],
//           board[i + 1][j], board[i + 1][j + 1], board[i + 1][j + 2],
//           board[i + 2][j], board[i + 2][j + 1], board[i + 2][j + 2],
//         ]
//         isValid = hasRepeatNum(arr)
//         arr.length = 0
//       }
//     }
//   }
//   return !isValid
// };
var isValidSudoku = function(board) {
  return backTrack(board, 0, 0)
};
function backTrack(board, i, j) {
  if(j > 8) { i++; j = 0 }
  if(i > 8) return true

  if(board[i][j] !== '.') {
    if(validPartial(board, i, j, board[i][j])) {
      return backTrack(board, i, j + 1)
    }
    return false
  } else {
    return backTrack(board, i, j + 1)
  }
}
function validPartial(board, i, j, c) {
  for(let x = 0; x < 9; x++) {
    if(board[i][x] === c && x !== j) return false
  }
  for(let y = 0; y < 9; y++) {
    if(board[y][j] === c && y !== i) return false
  }
  var row = i - i % 3, col = j - j % 3
  for(let x = 0; x < 3; x++) {
    for(let y = 0; y < 3; y++) {
      if(board[row + x][col + y] === c && (row + x !== i && col + y !== j)) return false
    }
  }
  return true
}
// console.log(isValidSudoku(
//   [
//     ["8","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
//    ]
// ));
// console.log(isValidSudoku(
//   [
//     ["5","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
//   ]
// ));
// @lc code=end

