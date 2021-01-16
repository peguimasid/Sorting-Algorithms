// MY SOLUTION
function digitCount(number) {
  number = number.toString()

  return number.length
}

// COLT'S SOLUTION
function digitCount(number) {
  if(number === 0) return 1
  return Math.floor(Math.log10(Math.abs(number))) + 1
}


console.log(digitCount(123))