/*Написати ф-ю яка приймає в себе 2 параметра (обєкт замовлення і
обєкт з цінами товару) Ця ф-я має повернути ціну замовлення*/

const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 };
const orderA = { apple: 5, cheese: 1, bread: 3 };
const orderB = { orange: 10, pork: 2, bread: 1 };
function result(sum) {
  if (orderA) {
    return (sum = productsPrice.ObjectValue() * orderA.ObjectValue());
  }
  return (sum = productsPrice.ObjectValue() * orderB.ObjectValue());
}
console.log(sum);
