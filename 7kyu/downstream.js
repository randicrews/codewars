// DESCRIPTION:
// Chingel is practicing for a rowing competition to be held on this saturday. He is trying his best to win this tournament for which he needs to figure out how much time it takes to cover a certain distance.

// Input

// You will be provided with the total distance of the journey, speed of the boat and whether he is going downstream or upstream. The speed of the stream and direction of rowing will be given as a string. Check example test cases!

// Output

// The output returned should be the time taken to cover the distance. If the result has decimal places, round them to 2 fixed positions.

function time(distance,boatSpeed,stream){
    //Write your own Code!
    // downstream goes with rower upstream goes against
    // 10, 2 => 24 => 2              12 => 24 => 2
    // 14, -2 => 24 => 2             12 => 24 => 2
    // 28, 3 => 54 => 1.74           31 => 54 => 1.74
     stream = stream.split(' ')
     stream = [stream[0].split('s'), stream[1]]
     if ( stream[0][0] === 'Down' ){
       stream = Number(stream[1])
     } else if ( stream[0][0] === 'Up' ){
       stream = Number(stream[1]) * -1
     } 
    let peep = distance / ( boatSpeed + stream)
    return Math.round(peep*100)/100
}