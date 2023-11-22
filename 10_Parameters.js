// - Rectangle

function myRectangle(x , y, width, height) {
  goto(x,y)
  angle(0)
  pendown()
  // forward(height)
  // right(90)
  // forward(width)
  // right(90)
  // forward(height)
  // right(90)
  // forward(width)
  // right(90)
  for(i=0; i<2; i++){
    forward(height)
    right(90)
    forward(width)
    right(90)
  }
  penup()
}

myRectangle(0 , 0, 100, 200)