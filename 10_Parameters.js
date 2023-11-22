// - Rectangle

function myRectangle(x , y, width, height) {
  goto(x,y)
  angle(0)
  pendown()
  forward(height)
  right(90)
  forward(width)
  right(90)
  forward(height)
  right(90)
  forward(width)
  right(90)
}

myRectangle(0 , 0, 100, 200)