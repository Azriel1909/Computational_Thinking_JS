// Function to draw a rectangular shape, but with no base line
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

// Function to draw a single window
function window(){
  angle( 0 )
  pendown()
  for( i=0; i<4; i++ ){
    forward( 20 )
    right( 90 )
  }
  penup()
}

// Function to draw the windows
function windows(){
  goto( -50, 10 )
  window()
  goto( 30, 10 )
  window()
  goto( -50, 50 )
  window()
  goto( -10, 50 )
  window()
  goto( 30, 50 )
  window()
}

// Main program to draw the whole house
rectangleNoBase( -70, 0, 140, 80 )  // Draw the walls and roof
rectangleNoBase( 60, 80, 10, 20 )   // Draw the chimney
rectangleNoBase( -10, 0, 20, 30 )   // Draw the front door
windows()
hideTurtle()