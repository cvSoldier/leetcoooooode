/**
 * @param {string} startTime
 * @param {string} finishTime
 * @return {number}
 */
var numberOfRounds = function(startTime, finishTime) {
  let startHour = Number(startTime.slice(0, 2))
  let startMinute = Number(startTime.slice(-2))
  let finishHour = Number(finishTime.slice(0, 2))
  let finishMinute = Number(finishTime.slice(-2))
  if(startHour > finishHour || startHour === finishHour && startMinute > finishMinute) {
    finishHour += 24
  }
  debugger
  let res = 0
  if(finishHour > startHour ) {
    // 中间的完整小时
    res += (finishHour - (startHour + 1)) * 4
    // 开始的小时
    res += Math.floor((60 - startMinute) / 15)
    // 最后的小时
    res += Math.floor(finishMinute / 15)
  } else {
    res = Math.floor(finishMinute / 15) - Math.ceil(startMinute / 15)
  }

  return res
}
// console.log(numberOfRounds("20:00", "06:00"));
// console.log(numberOfRounds("12:01", "12:44"));
console.log(numberOfRounds("00:01", "00:00"));