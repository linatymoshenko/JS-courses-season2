"use strict";

function getUniqueArrayElements(array) {
  var result = [];

  for (var index = 0; index < array.length; index++) {
    if (result.indexOf(array[index]) == -1) {
      result.push(array[index]);
    }
  }

  return result;
}

getUniqueArrayElements([1, 1, 1, 3, 2, 2]);
