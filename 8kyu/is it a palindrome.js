
// DESCRIPTION:
// Write a function that checks if a given string (case insensitive) is a palindrome.


function isPalindrome(x) {
    // your code here
    if ( x.toLowerCase() === x.split('').reverse().join('').toLowerCase()){
      return true
    } else {return false}
  }