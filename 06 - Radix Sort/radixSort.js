function digitCount(number) {
  number = number.toString()

  return number.length
}

function getDigit(num, place) {
  num = num.toString()

  const requestedDigit = parseInt(num[num.length - 1 - place])

  return requestedDigit ? requestedDigit : 0
}

function mostDigits(array) {
  let result = 0

  for(let number of array) {
    if(digitCount(number) > result) result = digitCount(number)
  }

  return result
}

function radixSort(nums) {
  const largestDigitLength = mostDigits(nums)

  for(let k = 0; k < largestDigitLength; k++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for(let i = 0; i < nums.length; i++) {
      const currentNumber = nums[i]
      const digit = getDigit(currentNumber, k)
      buckets[digit].push(currentNumber)
    }

    nums = buckets.flat(1)
  }

  return nums
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]))