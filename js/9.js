const array = [5, 6, 78, 45, 86, 9, 24, 105];
const reduce = array.reduce((total, elem) => {
  console.log("total", total, "elem", elem);
  total.push((elem = ""));
  return total;
}, []);
console.log(reduce);

let total = [];
for (const elem of array) total.push(elem + "");
console.log(total);
