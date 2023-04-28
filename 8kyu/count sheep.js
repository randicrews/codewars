// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    //your code here
    if (num != ''){
    let sheeps = ''
    let sheepNum = 0
    do {
      sheepNum = sheepNum + 1
      sheeps = sheeps + `${sheepNum} sheep...`
      
    } while (sheepNum < num);
    return sheeps
    }
    else return ''
    }