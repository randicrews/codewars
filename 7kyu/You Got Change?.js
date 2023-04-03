// Create a function that will take any amount of money and break it down to the smallest number of bills as possible. Only integer amounts will be input, NO floats. This function should output a sequence, where each element in the array represents the amount of a certain bill type. The array will be set up in this manner:

// array[0] ---> represents $1 bills

// array[1] ---> represents $5 bills

// array[2] ---> represents $10 bills

// array[3] ---> represents $20 bills

// array[4] ---> represents $50 bills

// array[5] ---> represents $100 bills

// In the case below, we broke up $365 into 1 $5 bill, 1 $10 bill, 1 $50 bill, and 3 $100 bills:

// 365 =>  [0,1,1,0,1,3]
// In this next case, we broke $217 into 2 $1 bills, 1 $5 bill, 1 $10 bill, and 2 $100 bills:

// 217 => [2,1,1,0,0,2]

function giveChange(amount) {
    let bills1 = 0
    let bills5 = 0
    let bills10 = 0
    let bills20 = 0
    let bills50 = 0
    let bills100 = 0
    
    // output array [ $1 bills, $5 bills, $10 bills, $20 bills, $50 bills, $100 bills]
    if (amount > 0){
    if (amount / 100 > 0){
      bills100 += Math.floor( amount / 100 )
    }
    if (amount / 50 > 0){
      bills50 += Math.floor( (amount - (bills100*100)) / 50 )
    }
    if (amount / 20 > 0){
      bills20 += Math.floor( (amount - (bills100*100) - (bills50*50)) / 20 )
    }
    if (amount / 10 > 0){
      bills10 += Math.floor( (amount - (bills100*100) - (bills50*50) - (bills20*20)) / 10 )
    }
    if (amount / 5 > 0){
      bills5 += Math.floor( (amount - (bills100*100) - (bills50*50) - (bills20*20) - (bills10*10)) / 5 )
    }
    if (amount / 1 > 0){
      bills1 += Math.floor( (amount - (bills100*100) - (bills50*50) - (bills20*20) - (bills10*10) -(bills5*5)) ) 
    }
    return [ bills1, bills5, bills10, bills20, bills50, bills100 ]
  }
    return [ bills1, bills5, bills10, bills20, bills50, bills100 ]