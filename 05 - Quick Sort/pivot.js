function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

// MY SOLUTION
function pivot(array) {
  let result = 0

  let pivotIndex = 0
  let pivotSmallerItems = 0

  for(let i = 0; i < array.length; i++) {
    if(array[i] < array[pivotIndex]) {
      pivotSmallerItems++
      swap(array, pivotSmallerItems, i)
    }
  }

  swap(array, pivotIndex, pivotSmallerItems)

  result = pivotSmallerItems

  return result
}

// COLT'S SOLUTION
function pivot(arr, start = 0){
  var pivot = arr[start];
  var swapIdx = start;

  for(var i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr,swapIdx,i);
    }
  }
  swap(arr,start,swapIdx);
  return swapIdx;
}

console.log(pivot([9, 4, 8, 2, 1, 5, 7, 6, 3]))