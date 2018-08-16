// let arr = [1,2,1,4,5,3,2];
// console.log([... new Set(arr)]);
let ar = [1,2,1,4,5,3,2];
let br = [2,1,3,5,2,4,1];
let abr = ar.concat(br);
abr.sort(function(a,b){return a-b});
console.log([... new Set(abr)]);