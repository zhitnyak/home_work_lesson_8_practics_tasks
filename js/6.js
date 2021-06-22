/* Написати ф-ю <strong>capitalize</strong> яка буде приймати строку
і буде вертати нову строку де кожне слово буде починатися з
великої літери.*/

function capitalize(string) {
  return string
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
}
console.log(capitalize("  зДравствуйте дорОгие товариЩи!    "));
