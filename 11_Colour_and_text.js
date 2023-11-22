// * Functions

function rectangleNoBase( startX, startY, width, height ){
  goto( startX, startY )
  angle( 0 )
  pendown()
  forward( height )
  right( 90 )
  forward( width )
  right( 90 )
  forward( height )
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
function bars(x,y,w){
  let randomTotalNumber = 0
  for(i=0; i<6;i++){
    let randomBarHeight= random(0,100)
    randomTotalNumber = randomTotalNumber + randomBarHeight
    goto(x,y)
    angle(0)
    rectangleNoBase(x,y,10,randomBarHeight)
    forward(w)
    x = x + 15
  }
  message(randomTotalNumber)
}

// * Main program

axes(0,0,100)
bars(5,0,20)