"use strict";

const countTotalSalary = function (employees) {
  let totalCount = 0;
  const salaries = Object.values(employees);

  for (const salary of salaries) {
    totalCount += salary;
  }
  return totalCount;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400