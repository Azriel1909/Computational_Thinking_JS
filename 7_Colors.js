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