// Draw a pentagon
pendown()
for( i=0; i<7; i++ ){
    forward( 50 )
    right( 72 )
}

// Draw a octagon
pendown()
for( i=0; i<9; i++ ){   // See change here?
    forward( 50 )
    right( 45 )         // and here?
}

// Draw a circle
pendown()
for( i=0; i< 40; i++ ){   // 8 sides
    forward( 10 )
    right( 10 )         // 45 x 8 = 360
}

// Draw a circle version 2
pendown()
for( i=0; i<90; i++ ){   // 8 sides
    forward( 5 )
    right( 4 )         // 45 x 8 = 360
}