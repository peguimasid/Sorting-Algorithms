// MY SOLUTION
function mostDigits(array) {
  let result = 0

  for(let number of array) {
    let numberLength = number.toString().length

    if(numberLength > result) {
      result = numberLength
    }
  }

  return result
}

// MY 2ND SOLUTION
function digitCount(number) {
  number = number.toString()

  return number.length
}

function mostDigits(array) {
  let result = 0

  for(let number of array) {
    if(digitCount(number) > result) result = digitCount(number)
  }

  return result
}

// COLT'S SOLUTION
function mostDigits(nums) {
  let maxDigits = 0;

  for(let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }

  return maxDigits
}


console.log(mostDigits([1, 1, 11111, 1]))