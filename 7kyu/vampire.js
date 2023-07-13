// Vampire Numbers
// Our loose definition of Vampire Numbers can be described as follows:

// 6 * 21 = 126
// # 6 and 21 would be valid 'fangs' for a vampire number as the 
// # digits 6, 1, and 2 are present in both the product and multiplicands

// 10 * 11 = 110
// # 110 is not a vampire number since there are three 1's in the
// # multiplicands, but only two 1's in the product
// Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.



var vampire_test = function(a, b){
    // isolate each digit
    // are all digits accounted for just once and no other numbers
    // OR ACTUALLY sort all digits for each and see if they're the same, avoid loop
    let c = String(a*b).split('').sort().join()
    if ( a < 0 && b < 0 ){ return false}
    a = String(a).split('')
    b = String(b).split('')
    let sus = [a + ','+b]
    sus = String(sus).split(',').sort().join()
    if ( c.length != sus.length ){ return false}
    if ( c == sus ){
      return true
    } else return false
    }