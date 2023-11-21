// * Sensible divisions

// > Draw a Sun

penup()

function sun(){
  right(125)
  forward(130)
  colour(255, 204, 0)
  width(30)
  pendown()
  for(i=0; i<10; i++){
    forward(10)
    right(35)
  }
}

sun()

// > Draw a tree

function tree() { // Function header
  // Function body
  right(125)
  forward(60)
  right(142)
  colour(102, 51, 0)
  width(20)
  pendown()
  forward(90)
  penup()

  right(90)
  forward(5)
  left(60)
  width(10)
  pendown()
  forward(20)
  left(45)
  width(5)
  forward(40)
  left(180)
  forward(40)
  left(135)
  width(5)
  forward(30)
  right(180)
  forward(70)

  right(60)
  forward(10)
  right(60)
  width(10)
  pendown()
  forward(20)
  left(45)
  width(5)
  forward(40)
  left(180)
  forward(40)
  left(135)
  width(9)
  forward(20)
  right(30)
  width(5)
  forward(30)
  right(180)
  forward(30)
  right(150)
  width(5)
  forward(30)
  right(180)
  forward(70)
  penup()
}

// - Main program
