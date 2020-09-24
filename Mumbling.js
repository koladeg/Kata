// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// function willFit(present, box){
//   let fst = present.reduce(function(a, arr) {return a + arr}, 0)
//   let snd = box.reduce(function(a, arr){return a + arr}, 0)
//    return fst < snd
// }

function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }

console.log(accum("HbideVbxncC"))

// Kata to find shortest word
function findShort(s){
  let fst = s.split(' ');   
  let w = fst[0];
  for (i of fst) {if (i.length < w.length){      w = i } }
    return w.length
 }

function findShort(s){
  return Math.min(...s.split(" ").map (s => s.length));
}