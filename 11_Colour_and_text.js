// * Functions

setFont('10px ubuntu, verdana')

function rectangleNoBase( startX, startY, widthR, heightR){
  goto( startX, startY )
  angle( 0 )
  pendown()
  width(widthR)
  forward(heightR)
  penup()
}

// Drawing Axes
function axes(x,y,length){
  pendown()
  goto(x,y)
  forward(length)
  goto(x,y)
  right(90)
  forward(length)
  goto(x-12, y+46)
  write(50)
  goto(x-12, y+96)
  write(100)
}

// Drawing bars
let randomTotalNumber = 0
let label = 1
function bars(x,y){
  colour(245, 78, 161)
  for(i=0; i<6;i++){
    let randomBarHeight= random(0,100)
    randomTotalNumber = randomTotalNumber + randomBarHeight
    goto(x,y)
    angle(0)
    rectangleNoBase(x,0,10,randomBarHeight)
    goto(x,y-10)
    label = label + 1
    write(label)
    x = x + 15
  }
  message(randomTotalNumber)
}

function average(w){
  width(w)
  colour(77, 77, 245)
  goto(0, randomTotalNumber / 6)
  angle(90)
  pendown()
  forward(100)
}

// * Main program
axes(0,0,100)
bars(10,0)
average(2)
