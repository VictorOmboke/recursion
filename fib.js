#!/usr/bin/env node

//Iterative fibonacci solution
function fibs(num) {
  if (num <= 0) {
    return [];
  }

  let array = [0];

  if (num === 1) {
    return array;
  }

  array.push(1);

  for (let i = 2; i < num; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array;
}

console.log("Iterative solution for fibonacci(8):");
console.log(fibs(8));

console.log("Iterative solution for fibonacci(10):");
console.log(fibs(10));

//Recursive fibonacci solution
function fibRec(num) {
  if (num < 2) {
    return num;
  } else {
    return fibRec(num - 1) + fibRec(num - 2);
  }
}

function displayFibRec() {
  let array = [];

  let num = 10;

  for (let i = 0; i < num; i++) {
    array.push(fibRec(i));
  }

  return array;
}

console.log("Recursive solution for fibonacci(10):");
console.log(displayFibRec());
