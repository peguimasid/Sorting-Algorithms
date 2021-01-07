function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function selectionSort(array) {
  for(let i = 0; i < array.length; i++) {
    let initialIndex = i;
    let smallValue = array[i];
    let smallValueIndex = initialIndex;

    for(let j = i; j < array.length; j++) {
      if(array[j] < smallValue) {
        smallValue = array[j]
        smallValueIndex = j
      }
    }

    if(smallValueIndex !== initialIndex) {
      swap(array, initialIndex, smallValueIndex)
    }
  }
  return array;
}

// COLT'S SOLUTION
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

console.log(selectionSort([55, 67, 32, 68, 90, 12, 56]))