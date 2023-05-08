// DESCRIPTION:
// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1

// The right side letters and their power:
//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

// left vs right
// fight = string lowercase 
// return winner
// w p b s = left 
// m q d z = right

function alphabetWar(fight)
{
  fight = fight.split('')
  let left = 0
  let right = 0
  for (const letter of fight){
    if (letter == 'w'){
      left += 4
    }
    if (letter == 'p'){
      left += 3
    }
    if (letter == 'b'){
      left += 2
    }
    if (letter == 's'){
      left += 1
    }
    if (letter == 'm'){
      right += 4
    }
    if (letter == 'q'){
      right += 3
    }
    if (letter == 'd'){
      right += 2
    }
    if (letter == 'z'){
      right += 1
    }
  }
  if ( left > right ){
    return "Left side wins!"
  } 
  if ( left < right ){
    return "Right side wins!"
  } 
  else {
    return "Let's fight again!"
  }
}