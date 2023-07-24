"use strict"

// Задача 1

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  let x1;
  let x2;
  
  if (d < 0) {
    arr = [];
    console.log ('Дискриминант меньше нуля');
  } else if (d === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
  } else (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
		x2 = (-b - Math.sqrt(d)) / (2 * a);

		arr.push(x1, x2);
  }
  
  return arr;
}

// Задача 2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent), isNaN(contribution), isNaN(amount)) {
  return false;
} else {
  let p = (percent / 100) / 12;
  let s = amount - contribution;
  let n = countMonths;
  let payment = s * (p + (p / (((1 + p)**n) - 1 )));
  let totalAmount = ((payment * n).toFixed(2));

  return totalAmount;
  }
}