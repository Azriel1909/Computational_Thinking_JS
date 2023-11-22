// * Functions

function rectangleNoBase( startX, startY, width, height ){
  goto( startX, startY )
  angle( 0 )
  pendown()
  forward( height )
  right( 90 )
  forward( width )
  right( 90 )
  forward( height )
  penup()
}

// Drawing Axes
function axes(x,y,length){
  pendown()
  goto(x,y)
  forward(length)
  goto(x,y)
  right(90)
  forward(length)
}

// * Main program

axes(0,0,100)