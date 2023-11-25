// Functions

function rectangleNoBase( startX, startY, width, height ){
  goto( startX, startY )
  for(i=0; i<2; i++){
    forward(height)
    right(90)
    forward(width)
    right(90)
  }
}

const squareSide = 70
const halfSide = (squareSide-10)/2


function background(){
  // Static part of the program
  rectangleNoBase(-halfSide, -halfSide-5, squareSide, squareSide)
}

let y = 0
let x = 0
let yStep = random(2,6)
let xStep = random(2,6)
let counter = 0

function moving(){
  rectangleNoBase(x, y-5, 10, 10)
  y = y + yStep
  x = x + xStep
  counter = counter + 1
  if (y >= halfSide){
    yStep = -yStep
    y = halfSide
  }
  if (y <= -halfSide){
    xStep = -xStep
    y = -halfSide
  }
  if(x >= halfSide){
    xStep = -xStep
    x = halfSide
  }
  if (x <= -halfSide){
    xStep = -xStep
    x = -halfSide
  }
  if (counter == 100){
    stopAnimate()
  }
}

function drawing() {
  redrawOnMove(false)
  clear()
  background()
  moving()
  redrawOnMove(true)
}

// Main Program

reset()
hideTurtle()
pendown()
animate(drawing, 120)