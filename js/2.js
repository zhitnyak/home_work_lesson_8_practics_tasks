const number = prompt("Введи число від 0 до 10");
if (number === Math.floor(Math.random() * 10 + 1)) {
  console.log(`Вітаю ви вгадали число ${number}`);
}
console.log(
  `Ви програли, компютер загадав ${Math.floor(Math.random() * 10 + 1)}`
);
