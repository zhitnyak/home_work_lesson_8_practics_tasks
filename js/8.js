/* Написати ф-ю яка приймає в себе 2 параметра (обєкт замовлення і
              обєкт з цінами товару) Ця ф-я має повернути ціну замовлення
              <br />
              <code>
                const productsPrice = { apple: 20, orange: 5, cheese: 12, pork:
                45, bread: 23 } const orderA = { apple: 5, cheese: 1, bread: 3 }
                const orderB = { orange: 10, pork: 2, bread: 1 }</code*/

const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 };
const orderA = { apple: 5, cheese: 1, bread: 3 };
const orderB = { orange: 10, pork: 2, bread: 1 };

//

function result(prices, order) {
  console.log(typeof prices);
  console.log(typeof order);

  const arrayOfPrices = Object.keys(prices);
  const arrayOfOrder = Object.keys(order);
  // console.log(arrayOfPrices);
  // console.log(arrayOfOrder);

  let result = arrayOfOrder.reduce((total, i) => {
    console.log(typeof i);
    if (arrayOfPrices.includes(i)) {
      console.log("Ok");
      // console.log(order[i]);
      // console.log(prices[i]);
      // console.log(prices[i] * order[i]);
      total += prices[i] * order[i];
      console.log(total);
    } else {
      console.log("Не Ок");
    }
    return total;
  }, 0);
  return result;
}

//
const sum = result(productsPrice, orderA);
console.log(sum);

// result(productsPrice, orderB);
