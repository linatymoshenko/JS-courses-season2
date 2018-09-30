"use strict";

function sortArrayAscendingUseSort(array) {
  function compareNumbers(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
  }

  array.sort(compareNumbers);

  return array;
}

// sortArrayAscendingUseSort([2, 67, 65, -8, 42, 3, 9]);

function sortArrayAscendingUseFor(array) {
  for (var firstIndex = 0; firstIndex < array.length; firstIndex++) {
    for (var secondIndex = 0; secondIndex < array.length - 1 - firstIndex; secondIndex++) {

      if (array[secondIndex] > array[secondIndex + 1]) {
        var temporary = array[secondIndex];
        array[secondIndex] = array[secondIndex + 1];
        array[secondIndex + 1] = temporary;
      }
    }
  }

  return array;
}

sortArrayAscendingUseFor([10, 9, 8, 7, 6, 5, 4, 3]);
