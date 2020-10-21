function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function sort(array) {
  for(let i = array.length; i > 0; i--) {
    for(let j = 0; j < i - 1; j++){
      if(array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      }

    }
  } 

  return array;
}


console.log(sort([9, 3, 2, -3, 5, 4, 6, 8, 7]))