"use strict";

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");
  if (Number.isNaN(Number(input))) {
    alert("Данные не корректны, введите число");
  } else if (input !== null) {
    numbers.push(Number(input));
  }

} while (input !== null);

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;

    console.log(total)
  }
  alert(`Cумма введенных чисел равна: ${total}`);

} else {
  alert("Вы не вводили числа");
}