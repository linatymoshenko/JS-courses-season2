"use strict";

function getFibonacciNumbersArray(countNumbers) {
  var result = [];

  if (countNumbers >= 1) {
    result.push(0);
  }

  if (countNumbers >= 2) {
    result.push(1);
  }

  while (result.length < countNumbers) {
    result.push(result[result.length - 1] + result[result.length - 2])
  }

  return result;
}

getFibonacciNumbersArray(8);
