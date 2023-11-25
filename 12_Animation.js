// Functions

function rectangleNoBase( startX, startY, width, height ){
  goto( startX, startY )
  angle( 0 )
  pendown()
  for(i=0; i<4; i++){
    forward(height)
    right(90)
    forward(width)
    right(90)
  }
  penup()
}

function background(){
  // Static part of the program
  angle(0)
  rectangleNoBase(0,0,50,250)
}

function moving(startX, startY, step){
  goto(st)
}

// Main Program

background()