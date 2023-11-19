// Draw a table

// Get key values from the user
var height = Number( prompt( "Table height?: "))
var width = Number( prompt( "Table width?: "))
var columns = Number( prompt( "How many columns?: "))
var rows = Number( prompt( "How many rows?: "))


// Draw the colums / vertical lines
for( i=0; i<columns+1; i++ ){
    pendown()
    forward( height )
    penup()
    right( 180 )
    forward( height )
    left( 90 )
    forward( width / columns )
    left( 90 )
}

// Move turtle back to the starting position
left( 90 )
forward( width + (width / columns ) )
left( 180 )

// Draw the rows / horizontal lines
for( i=0; i<rows+1; i++ ){
    pendown()
    forward( width )
    penup()
    right( 180 )
    forward( width )
    right( 90 )
    forward( height / rows )
    right( 90 )
}