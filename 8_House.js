// * The problem: Drawing a house

/**
 * 1. flat-roofed house over two floors
 * 2. a door in the middle of the lower floor
 * 3. five windows
 * 4. a chimney on the right hand side
 */

// - Developing a plan

/**
 * Start drawing a big rectangle
 * Divide the rectangle by the half
 * In the middle of the  rectangle (in the 1st floor) use a small rectangle to draw the door.
 * In the top of the house (right hand side) draw a square and over thar, a rectangle (this is the chimney)
 * Finally, use a square to draw the five windows in their respective place (we can use the same function to draw the window and the a especially sequence of instructions to indicate the place).
 */

// -- A possible plan

/**
 * Draw the walls and the roof
 * Draw the chimney
 * Draw the door
 * Draw the windows
 */

// > Turn the plan into a program framework

// Structure of the program

// My functions

function walls(){
  // ? The empty function definition is called a Stub.

  console.log('Calling the walls()')
  // Drawing the big square
  pendown()
  for( i=0; i<4; i++ ){
    forward( 200 )
    right( 90 )
  }

  // Divide the big square by the half
  penup()
  forward(200/2)
  right(90)
  pendown()
  forward(200)

  // Return to the beginning place of the turtle
  penup()
  left(180)
  forward(200)
  left(90)
  forward(200/2)
  right(180)
}

function roof(){
  penup()
  forward(200)
  left(90)
  pendown()
  forward(30)
  right(90)
  forward(10)
  right(90)
  forward(260)
  right(90)
  forward(10)
  right(90)
  forward(30)

  // Return to the beginning place of the turtle
  penup()
  forward(200)
  left(90)
  forward(200)
  left(180)
}

function chimney(){
  penup()
  forward(200 + 10)
  right(90)
  forward (230 - 100)
  pendown()
  
  for( i=0; i<4; i++ ){
    forward( 40 )
    left( 90 )
  }
  penup()
  left(90)
  forward(40)
  left(-90)
  for (i=0; i<5; i++) {
    pendown()
    forward(40)
    penup()
    right(180)
    forward(40)
    left(90)
    forward(40/5)
    left(90)
  }
  penup()
  left(90)
  forward(40)
  left(90)
  pendown()
  forward(10)
  right(90)
  forward(10)
  right(90)
  forward(60)
  right(90)
  forward(10)
  right(90)
  forward(10)

  // Return to the beginning place of the turtle 
  penup()
  forward(40)
  left(90)
  forward(40)
  right(90)
  forward(130)
  left(90)
  forward(210)
  left(180)
}

function aWindow() {
  penup()
  pendown()
  for( i=0; i<4; i++ ){
    forward( 40 )
    right( 90 )
  }
}

// Main program

walls()
roof()
chimney()
windows()

// Structure of the program
