// MY SOLUTION
function getDigit(num, place) {
  num = num.toString()

  const requestedDigit = parseInt(num[num.length - 1 - place])

  return requestedDigit ? requestedDigit : 0
}

// COLT SOLUTION
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place) % 10)
}

console.log(getDigit(9, 2))