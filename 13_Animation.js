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

function background(){
  // Static part of the program
  rectangleNoBase(-5,-25,20,50)
}

let y = -0
let step = 3
let counter = 0

function moving(){
  rectangleNoBase(0, y-5, 10, 10)
  y = y + step
  counter = counter + 1
  if (y >= 20){
    step = -step
  }
  if (y <= -20){
    step = -step
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