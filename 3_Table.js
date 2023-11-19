// Draw a table

// Get key values from the user
var height = Number( prompt( "Table height?: "))
var width = Number( prompt( "Table width?: "))
var cols = Number( prompt( "Table columns?: ")) 
var rows = Number( prompt( "Table rows?: ")) 

// Draw the colums / vertical lines
for( i=0; i<cols + 1; i++ ){
    pendown()
    forward( height )
    penup()
    right( 180 )
    forward( height )
    left( 90 )
    forward( width / cols )
    left( 90 )
}

// Move turtle back to the starting position
left( 90 )
forward( width + (width / 5) )
left( 180 )

// Draw the rows / horizontal lines
for( i=0; i< rows + 1; i++ ){
    pendown()
    forward( 140 )
    penup()
    right( 180 )
    forward( 140 )
    right( 90 )
    forward( 100 / rows )
    right( 90 )
}