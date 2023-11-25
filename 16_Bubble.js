// > Functions

// Circle()

function circle(x,y,r){
  goto(x,y)
  angle(0)
  forward(r)
  right(90)

  // Determine how many segments needed
  const segments = 10 + r/3
  const deltaAngle = 360/segments
  const deltaLength = 2*Math.PI*r/segments

  // Drawing the circle with a lot of straight lines
  pendown()
  for(let i=0; i<segments; i++){
    forward(deltaLength)
    right(deltaAngle)
  }
  penup()
}

function burst(x,y,r){
  goto(x,y)
  angle(0)
  forward(r)
  right(90)

  // Determine how many segments needed
  const segments = 20
  const deltaAngle = 360/segments
  const deltaLength = 2*Math.PI*r/segments

  // Drawing the circle with a lot of straight lines
  for(let i=0; i<segments; i++){
    pendown()
    right(90)
    forward(10)
    right(180)
    penup()
    forward(10)
    right(90)
    forward(deltaLength)
    right(deltaAngle)
  }
}

// Moving Part
let radius = 4
function moving(){
  if(radius < 50){
    circle(0,0,radius)
  }
  if(radius >= 50 && radius <= 70){
    burst(0,0,radius)
  }
  radius = radius + 2
  if (radius >= 70){
    stopAnimate()
    clear()
  }
}

function drawing(){
  redrawOnMode(false)
  clear()
  moving()
  redrawOnMode(true)
}

// > Main program

reset()
penup()
animate(drawing, 10)