const num = prompt(
  "Конвертор градусов из Цельсия в Фаренгейты - нажми цифру 1. Конвертор градусов из Фаренгейта в Цельсий - нажми 2"
);
if (Number(num) === 1) {
  const result1 = prompt("Введи значение градусов по Цельсию");
  alert(`по Фаренгейту это ${Math.round((result1 * 9) / 5 + 32)} градусов`);
} else if (Number(num) === 2) {
  const result2 = prompt("Введи значение градусов по Фаренгейту");
  alert(`по Цельсию это ${Math.round((result2 - 32) / 1.8)} градусов`);
} else {
  alert("Попробуйте еще раз");
}
