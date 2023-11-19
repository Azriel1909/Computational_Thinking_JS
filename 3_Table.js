// Draw a table

var height = Number(prompt('Table height: '))
var width = Number(prompt('Table width: '))

// Draw the colums / vertical lines
for( i=0; i<6; i++ ){
    pendown()
    forward( height )
    penup()
    right( 180 )
    forward( height )
    left( 90 )
    forward( width / 5 )
    left( 90 )
}

// Move turtle back to the starting position
left( 90 )
forward( width + (width / 5) )
left( 180 )

// Draw the rows / horizontal lines
for( i=0; i<5; i++ ){
    pendown()
    forward( width )
    penup()
    right( 180 )
    forward( width )
    right( 90 )
    forward( height / 4 )
    right( 90 )
}