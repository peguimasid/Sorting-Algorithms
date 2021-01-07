function pivot(array, start = 0, end = array.length - 1) {
  function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }

  let result = 0

  let pivotIndex = start
  let pivotSmallerItems = start

  for(let i = start + 1; i < array.length; i++) {
    if(array[i] < array[pivotIndex]) {
      pivotSmallerItems++
      swap(array, pivotSmallerItems, i)
    }
  }

  swap(array, pivotIndex, pivotSmallerItems)

  result = pivotSmallerItems

  return result
}

function quickSort(array, left = 0, right = array.length - 1) {
  if(left < right) {
  let pivotIndex = pivot(array, left, right)
  quickSort(array, left, pivotIndex - 1)
  quickSort(array, pivotIndex + 1, right)
  }

  return array
}

console.log(quickSort([4,6, -4, -8,9,1,2,5,3]))