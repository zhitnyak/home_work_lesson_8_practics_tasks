function toFareng(result1) {
  return Math.round((result1 * 9) / 5 + 32);
}
function toCelsium(result2) {
  return Math.round((result2 - 32) / 1.8);
}
console.log(toFareng(20));
console.log(toCelsium(78));
