// Valid HK Phone Number
// Overview
// In Hong Kong, a valid phone number has the format xxxx xxxx where x is a decimal digit (0-9). For example:

// "1234 5678" // is valid
// "2359 1478" // is valid
// "85748475" // invalid, as there are no spaces separating the first 4 and last 4 digits
// "3857  4756" // invalid; there should be exactly 1 whitespace separating the first 4 and last 4 digits respectively
// "sklfjsdklfjsf" // clearly invalid
// "     1234 5678   " // is NOT a valid phone number but CONTAINS a valid phone number
// "skldfjs287389274329dklfj84239029043820942904823480924293042904820482409209438dslfdjs9345 8234sdklfjsdkfjskl28394723987jsfss2343242kldjf23423423SDLKFJSLKsdklf" // also contains a valid HK phone number (9345 8234)
// Task
// Define two functions, isValidHKPhoneNumber and hasValidHKPhoneNumber, that returns whether a given string is a valid HK phone number and contains a valid HK phone number respectively (i.e. true/false values).


// TODO: Define the two functions

function isValidHKPhoneNumber(str){
    // IS string valid HK phone number 
    if ( str[4] == ' ' && str.length === 9 ){
      for ( let i = 0; i < str.length; i++ ){
        if ( i !== 4 && str[i] == ' ' || isNaN(Number(str[i]) )){
          return false 
        }
      } return true } 
    return false
  } 
  
  
  function hasValidHKPhoneNumber(str){
    // does string CONTAIN HK phone number 
    for ( let i = 0; i < str.length; i++ ){
      if ( !isNaN(Number(str[i])) && str[i] !== ' '
        && !isNaN(Number(str[i+1])) && str[i+1] !== ' '
        && !isNaN(Number(str[i+2])) && str[i+2] !== ' '
        && !isNaN(Number(str[i+3])) && str[i+3] !== ' '
        && str[i+4] === ' ' 
        && !isNaN(Number(str[i+5])) && str[i+5] !== ' '
        && !isNaN(Number(str[i+6])) && str[i+6] !== ' '
        && !isNaN(Number(str[i+7])) && str[i+7] !== ' '
        && !isNaN(Number(str[i+8])) && str[i+8] !== ' ' ){
      return true
      } 
    }
    return false
  }