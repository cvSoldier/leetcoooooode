/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */
 var maxValue = function(n, x) {
   debugger
   if(n[0] === '-') {
     for(let i = 0; i < n.length; ++i) {
       if(Number(n[i]) > x) return n.slice(0, i) + x + n.slice(i)
      }
    } else {
    for(let i = 0; i < n.length; ++i) {
      if(Number(n[i]) < x) return n.slice(0, i) + x + n.slice(i)
    }
  }
  return n + x
};
console.log(maxValue('-132', 3));
console.log(maxValue('73', 6));
console.log(maxValue('-55', 2));
console.log(maxValue('469975787943862651173569913153377', 3));