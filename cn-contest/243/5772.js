/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
 var isSumEqual = function(firstWord, secondWord, targetWord) {
  var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  let firstNum = ''
  for(let i = 0; i < firstWord.length; ++i) {
    firstNum += abc.indexOf(firstWord[i])
  }
  let secNum = ''
  for(let i = 0; i < secondWord.length; ++i) {
    secNum += abc.indexOf(secondWord[i])
  }
  let targetNum = ''
  for(let i = 0; i < targetWord.length; ++i) {
    targetNum += abc.indexOf(targetWord[i])
  }
  debugger
  return Number(targetNum) === Number(firstNum) + Number(secNum)
};
console.log(isSumEqual('acb', "cba", "cdb"));