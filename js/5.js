/*Написати програму де користувач вводить 3 числа, після вводу всіх
трьох чисел йому на екрані показується найбільше з них. Додатково
перевіряти чи це взагалі числа*/
const num1 = prompt("Укажи первое число");
const num2 = prompt("Укажи второе число");
const num3 = prompt("Укажи третье число");

if (Number(num1) > Number(num2) && Number(num1) > Number(num3)) {
  alert(`Наибольшее число: ${num1}`);
} else if (Number(num2) > Number(num1) && Number(num2) > Number(num3)) {
  alert(`Наибольшее число: ${num2}`);
} else if (Number(num3) > Number(num2) && Number(num3) > Number(num1)) {
  alert(`Наибольшее число: ${num3}`);
} else {
  alert("Введите число!");
}
