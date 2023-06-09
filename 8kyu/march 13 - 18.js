// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  if (bool === true){
    return "Yes"
  } if (bool === false){
    return "No"
  }
}

/*There are pillars near the road. 
The distance between the pillars is the same and the width of the pillars is the same. 
Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).

Calculate the distance between the first and the last pillar in centimeters 
(without the width of the first and last pillar).*/

function pillars(numPill, dist, width) {
    // your code here
   if (numPill > 1 && dist > 9 && dist < 31 && width > 9 && width < 51) { 
    return ((dist * (numPill-1)*100) + (width * (numPill-2)))
   }
   else {
       return 0
     }
  }
/*We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.*/

const stringToNumber = str => Number(str);

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. 

function evenOrOdd(number) {
  if (number % 2 ===0){
    return "Even"
  } else {
    return "Odd"
  }
}

//In this kata you will create a function that takes in a list and returns a list with the reverse order.

function reverseList(list) {
  let backwards = list.reverse()
  return backwards
}

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?



