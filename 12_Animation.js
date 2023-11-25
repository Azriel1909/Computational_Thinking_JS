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
  angle(0)
  rectangleNoBase(-5,-125,20,250)
}

let x = -120
let step = 3

function moving(){
  goto(-5, x)
  angle(90)
  forward(20)
  x = x + step
  if (x >= 120){
    step = -step
  }
  if (x <= -120){
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
animate(drawing, 100)