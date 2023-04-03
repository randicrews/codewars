// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

// Examples
// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
// []                               -->  0

function sumEvenNumbers(input) {
    let onlyEvens = []
    for ( let num of input){
      if (num % 2 == 0){
        onlyEvens.push(num)
      }
      if (num === ''){
        num = 0
        onlyEvens.push(num)
      }
    }
    return onlyEvens.reduce((x,y) => x + y)
  }

  
//   DavidFromNorth's solution that i love! made fat arrow function expressions something i absolutely fully grasp rather than something i know how to use. excited to refactor some things
// const sumEvenNumbers = input => input.reduce((evenNumSum, num) => (num % 2 === 0 ? evenNumSum += num : evenNumSum), 0);