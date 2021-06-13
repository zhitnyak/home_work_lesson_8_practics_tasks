const number1 = prompt("Введи перше число");
const number2 = prompt("Введи друге число");
const sing = prompt("Введи знак операції + - * /");
if (sing === "+") {
  console.log(Number(number1) + Number(number2));
} else if (sing === "-") {
  console.log(Number(number1) - Number(number2));
} else if (sing === "*") {
  console.log(Number(number1) * Number(number2));
} else if (sing === "/") {
  console.log(Number(number1) / Number(number2));
}
