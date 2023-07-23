// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
	// Write your code here
  let capIn = []
  for ( i = 0; i < word.length; i++ ){
    if ( word[i] === 'A' || word[i] === 'B' || word[i] === 'C' || word[i] === 'D' || word[i] === 'E' || word[i] === 'F' || word[i] === 'G' || word[i] === 'H' || word[i] === 'I' || word[i] === 'J' || word[i] === 'K' || word[i] === 'L' || word[i] === 'M' || word[i] === 'N' || word[i] === 'O' || word[i] === 'P' || word[i] === 'Q' || word[i] === 'R' || word[i] === 'S' || word[i] === 'T' || word[i] === 'U' || word[i] === 'V' || word[i] === 'W' || word[i] === 'X' || word[i] === 'Y' || word[i] === 'Z'){
      capIn.push(word.indexOf(word[i]))
    }
  }
  return capIn.sort()
};