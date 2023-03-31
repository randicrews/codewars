// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    // your code here
    // count of pos conj w
    // sum of neg
    let negSum = 0
    if (input === null || input.length === 0) return []
    let negOnly = input.filter(num => num < 0)
    let posOnly = input.filter(num => num > 0)
    let posCount = posOnly.length
    for (let i = 0; i < negOnly.length; i++){
      negSum += negOnly[i] 
    }
    console.log(posCount)
    return [ posCount, negSum ]
    }