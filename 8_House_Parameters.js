function rentangle(startX, startY, width, height){
  goto(startX, startY)
  angle(0)
  pendown()
  forward(height)
  right(90)
  forward(width)
  right(90)
  forward(height)
  right(90)
  forward(width)
  penup()
}

function aWindow(){
  angle( 0 )
  pendown()
  for( i=0; i<4; i++ ){
    forward( 20 )
    right( 90 )
  }
  penup()
}

function windows(){
  goto( -50, 10 )
  aWindow()
  goto( 30, 10 )
  aWindow()
  goto( -50, 50 )
  aWindow()
  goto( -10, 50 )
  aWindow()
  goto( 30, 50 )
  aWindow()
}

rentangle(-70, 0, 150, 100)
rentangle(40, 100, 20, 20)
rentangle(-10, 0, 20, 30)
windows()
