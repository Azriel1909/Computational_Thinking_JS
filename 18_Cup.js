// Creating own task and solving it

// * Task: Drawing a cup of hot coffee

// * Brainstorm

/**
 * A cup of coffee  
 * A cup plate
 *   Some curves (made os straight lines)
 *   Semi Circle
 * Steaming hot coffee
 *   Some curves (made os straight lines)
 */

// * Specify

/**
 * Stage 1 (simplest): Drawing a stating cup of coffee on the cup plate and over them, static straights simulating the steam.
 * 
 * Stage 2 (builds on / extends Stage 1): Adding some solid color to the figures and.
 * 
 * Stage 3 (builds on / extends Stage 1): The steam of the hot coffee is not static, therefore, the steam have a wave animation.
 */

// * Design

/**
 * Background (static) part:
 * 1. Semicircle (where the coffee is contained)
 * 2. The cup plate (only an horizontal straight)
 * 
 * Moving Part: 
 * 1. The steam are three lines with some curves in from of waves over the cup of coffee.
 */

// * Implement

// Functions

function cup(x,y,r){
  goto(x,y)
  angle(90)
  forward(r)
  right(90)
  
  // Determine how many segments needed
  const segments = 10 + r/1
  const deltaAngle = 180/segments
  const deltaLength = Math.sqrt(4-x**2)

  // Drawing the circle with a lot of straight lines
  pendown()
  for(let i=0; i<segments; i++){
    forward(deltaLength)
    right(deltaAngle)
  }
  penup()
}

// + a = angle
// + l = length

function topOfTheCup(l,a){
	pendown()
	right(a)
	forward(l)
}

function cupPlate(y,l){
  penup()
  goto(0,y)
  angle(0)
  pendown()
  right(90)
  forward(l)
}

// Main program

penup()
cup(0,0,100)
topOfTheCup(130,90)
cupPlate(-75,60)
hideTurtle()

// * Test