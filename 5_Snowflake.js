// + Version 1

for( i=0; i<8; i++ ){
	pendown()
	forward(30)
  penup()
  right(180)
  forward(30)
  left(45)
}

// - Version 2

for( i=0; i<8; i++ ){
  // Draw the spoke
  pendown()
  forward( 50 )
  
  // Move back to the centre
  penup()
  right( 180 )
  forward( 50 )
  right( 180 )
  
  // Adjust the angle of drawing, ready for next time
  left(45)
}

// -- Version 3

for( i=0; i<8; i++ ){
  // Draw the spoke
  pendown()
  forward( 50 )
  
  // Move back to the centre
  penup()
  right( 180 )
  forward( 50 )
  right( 45 )
  
  // Adjust the angle of drawing, ready for next time
}

// * Pentagon Spoke

for( i=0; i<5; i++ ){
  // Draw the spoke
  pendown()
  forward( 50 )
  
  // Move back to the centre
  penup()
  right( 180 )
  forward( 50 )
  right( 180 )
  
  // Adjust the angle of drawing, ready for next time
  right( 72 )
}

// * Nested

for( i=0; i<5; i++){
  // Draw the spoke
  pendown()
  forward( 50 )
  
  // Now draw the hexagon
  for( j=0; j<6; j++ ){   
    forward( 20 )
    right( 60 )
  }
  
  // Move back to centre
  penup()
  right( 180 )
  forward( 50 )
  right( 180 )
  
  // Adjust the angle of drawing, ready for next time
  right( 72 )
}

// ! COmplete snowflake

for( i=0; i<5; i++){
  // Draw the spoke
  pendown()
  forward( 50 )
  
  // Now draw the hexagon
  left( 60 )         // Point pen to one side
  for( j=0; j<6; j++ ){   
    forward( 25 )
    right( 60 )      // Bring the pen back straight
  }
  right( 60 )
  
  // Move back to centre
  penup()
  right( 180 )
  forward( 50 )
  right( 180 )
  
  // Adjust the angle of drawing, ready for next time
  right( 72 )
}
