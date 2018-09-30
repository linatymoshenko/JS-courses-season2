"use strict";

function sumArrayElements(array) {
  var sum = 0;

  for (var index = 0; index < array.length; index++) {
    sum += array[index];
  }

  return sum;
}

sumArrayElements([1, 4, 6, 7, 9, 3]);
