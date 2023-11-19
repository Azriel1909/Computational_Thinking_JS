// Part 2: Petals
for(i=0; i<9 ;i++) {
  penup()
  forward(40)
  right(20)
  for(j=0; j<10; j++) {
    pendown()
    forward(10)
    right(35)
  }
  right(30)
}

// Part 1: Big circle
penup()
forward(80/2)
right(90)
forward(100/2)
for(i=0; i<90; i++) {
  pendown()
  forward(1.5)
  right(4)
}
right(90)
penup()
forward(80)
pendown()
forward(50)
right(180)
penup()
forward(50/2)

// Part 3: Leaf

for( i=0; i<7; i++ ){
    pendown()
    forward( 10 )
    right( 72 )
}