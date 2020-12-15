function merge(array1, array2) {
  let result = []
  let i = 0
  let j = 0

  while(i < array1.length && j < array2.length) {
    if(array1[i] < array2[j]) {
      result.push(array1[i])
      i++
    } else {
      result.push(array2[j])
      j++
    }
  }

  while(i < array1.length) {
    result.push(array1[i])
    i++
  }

  while(j < array2.length) {
    result.push(array2[j])
    j++
  }

  

  return result
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]))