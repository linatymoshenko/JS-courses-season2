let firstArray = [1,2,3,4];
let secondArray = [7,6,5,4,3];

function getArrayDifference(firstArray, secondArray) {
  let firstArrayFilter = firstArrayElement => {
    let checkExistElement = secondArrayElement => firstArrayElement == secondArrayElement;

    return !secondArray.find(checkExistElement);
  };

  return firstArray.filter(firstArrayFilter);
}

console.log(getArrayDifference(firstArray, secondArray));
