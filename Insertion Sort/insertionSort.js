function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

// MY SOLUTION (Wrong)
// function insertionSort(array) {
//   for(let i = 1; i < array.length; i++) {
//     console.log(array);
//     for(let j = 0; j < i; j++) {
//       if(array[i] < array[j])  {
//         swap(array, i, j)
//       }
//     }
//   }

//   return array
// }

// COLT'S SOLUTION
function insertionSort(array) {
  for(let i = 1; i < array.length; i++) {
    let currentVal = array[i]
    for(var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j]
    }
    array[j + 1] = currentVal

  }
  return array;
}

console.log(insertionSort([2, 1, 9, 76, 4]))