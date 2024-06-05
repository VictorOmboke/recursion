#!/usr/bin/env node

//Recursive merge sort function
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

//function to merge both halves of the array in order
function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left).concat(right);
}

let array = [3, 2, 1, 13, 8, 5, 0, 1];

let array2 = [105, 79, 100, 110];

console.log(mergeSort(array));

console.log(mergeSort(array2));
