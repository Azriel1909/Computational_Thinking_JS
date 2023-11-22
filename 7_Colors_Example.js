// Draw a hedge section
function hedgeSection(){
	log( "in function" )
	width( 30 )
	colour( 0, 128, 0, 1 )
	pendown()
	forward( 80 )
	penup()

}

// Draw a gate
function gate(){
	right( 90 )
	forward( 13 )
	right( 180 )
	width( 4 )
	pendown()
	colour( 80, 80, 0, 1 )
	for( i=0; i<2; i++ ){
		forward( 26)
		right( 90 )
		forward( 56 )
		right( 90 )
	}
	width( 2 )
	penup()
	for( i=0; i<3; i++){
		forward( 7 )
		right( 90 )
		pendown()
		forward( 56 )
		penup()
		right( 180 )
		forward( 56 )
		right( 90 )
	}
	forward( 6 )
	right( 90 )
	right( 26.57 )
	pendown()
	forward( 62.6 )
	penup()
	left( 26.57 )
}

// Draw full hedge
function hedgeAndGate(){
	// Draw hedge left
	left( 90 )
	forward( 100 )
	left( 180 )
	hedgeSection()  // This is the new call

	// Draw gate
	gate()

	// Draw hedge right
	left( 90 )
	forward( 14 )
	right( 90 )
	hedgeSection()  // This is the second call
}

// Draw tree
function tree(){
	right( 125 )
	forward( 50 )
	right( 145 )
	colour( 80, 80, 0, 1 )
	width( 20 )
	pendown()
	forward( 90 )
	penup()

	right( 90 )
	forward( 5 )
	left( 60 )
	width( 10 )
	pendown()
	forward( 20 )
	left( 45 )
	width( 5 )
	forward( 40 )
	left( 180 )
	forward( 40 )
	left( 135 )
	width( 9 )
	forward( 20 )
	right( 30 )
	width( 5 )
	forward( 30 )
	right( 180 )
	forward( 30 )
	right( 150 )
	width( 5 )
	forward( 30 )
	right( 180 )
	forward( 70 )

	right( 60 )
	forward( 10 )
	right( 60 )
	width( 10 )
	pendown()
	forward( 20 )
	left( 45 )
	width( 5 )
	forward( 40 )
	left( 180 )
	forward( 40 )
	left( 135 )
	width( 9 )
	forward( 20 )
	right( 30 )
	width( 5 )
	forward( 30 )
	right( 180 )
	forward( 30 )
	right( 150 )
	width( 5 )
	forward( 30 )
	right( 180 )
	forward( 70 )
	penup()
}

// Draw sun
function sun(){
	right( 125 )
	forward( 130 )
	colour( 255, 255, 0, 2 )
	width( 28 )
	pendown()
	for( i=0; i<10; i++){
		forward( 10 )
		right( 36 )
	}
}

// Main program
reset()
penup()
hedgeAndGate()
tree()
sun()
hideTurtle()