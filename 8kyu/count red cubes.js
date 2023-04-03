// Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

// Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

// To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.

function countSquares(cuts){
    const layers = cuts + 1
    const cubesPerLayer = layers ** 2
    const total = cubesPerLayer * Math.sqrt(cubesPerLayer)
    const inside = ((cuts - 1) ** 2) * Math.sqrt(((cuts - 1) ** 2))
    const red = total - inside
    if (cuts > 1){
      return red
    } else {
      return total
    }
  }
  
  // cuts:layers   0:1, 1:2, 2:3, 3:4, 4:5   layers = cuts + 1
  // layers:cubePer 1:1, 2:4, 3:9, 4:16, 5:25   cubePerLayer = layers ** 2
  // cubePer:total 1:1, 4:8, 9:27, 16:64, 25:125  total = cubePer * root(cubePer)
  // total:red     1:1, 8:8, 27:26(aka -1), 64:56(aka -8), 125:98(aka -27)  if cuts > 1 total = cubePer - inside