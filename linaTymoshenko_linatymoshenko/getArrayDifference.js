const firstArray = [1,2,3,4];
const secondArray = [7,6,5,4,3];

function getArrayDifference(firstArray, secondArray) {
  const firstArrayFilter = firstArrayElement => {
    const checkExistElement = secondArrayElement => firstArrayElement == secondArrayElement;

    return !secondArray.find(checkExistElement);
  };

  return firstArray.filter(firstArrayFilter);
}

console.log(getArrayDifference(firstArray, secondArray));
