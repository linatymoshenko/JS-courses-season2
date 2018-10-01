"use strict";

function getFibonacciNumbersArray(countNumbers) {
  var result = [];
  var firstNumber = 0;
  var nextNumber = 1;

  if (countNumbers >= 1) {
    result.push(firstNumber);
  }

  while (countNumbers >= 2) {
    result.push(nextNumber);
    nextNumber += result[result.length - 2];
    countNumbers--;
  }

  return result;
}

getFibonacciNumbersArray(8);
