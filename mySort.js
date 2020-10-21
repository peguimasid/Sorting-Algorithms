function mySort(array) {
  let arraySorted = [];
  
  function helper(helperInput) {
    if(!helperInput.length) return;
    let lowerValue = Number.POSITIVE_INFINITY;
    let lowestValueIndex = 0;

    for(let i = 0; i < helperInput.length; i++) {
      if(array[i] < lowerValue) {
        lowerValue = array[i];
        lowestValueIndex = i;
      }
    }

    arraySorted.push(lowerValue);
    helperInput.splice(lowestValueIndex, 1)
    return helper(helperInput)
  }

  helper(array);

  return arraySorted
}

console.log(mySort([1, 4, 7, 2, 9, 7382, 121, 90, 78, 98]))

