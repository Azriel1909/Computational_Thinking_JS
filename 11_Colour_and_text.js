// * Functions

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
}

// Drawing bars
let randomTotalNumber = 0
function bars(x,y,w){
  colour(245, 78, 161)
  for(i=0; i<6;i++){
    let randomBarHeight= random(0,100)
    randomTotalNumber = randomTotalNumber + randomBarHeight
    goto(x,y)
    angle(0)
    rectangleNoBase(x,0,10,randomBarHeight)
    forward(w)
    x = x + 15
  }
  message(randomTotalNumber)
}

function avarage(w){
  width(w)
  colour(77, 77, 245)
  goto(0, randomTotalNumber / 6)
  angle(90)
  pendown()
  forward(100)
}

// * Main program
axes(0,0,100)
bars(10,0,20)
