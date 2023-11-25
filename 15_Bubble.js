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

// Moving Part
let radius = 0
function moving(){
  // The radius is going to be bigger each time
  circle(0,0,radius)
  // Updating radius
  radius = radius + 2

  if(radius >=50){
    stopAnimate()
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
pendown()
animate(drawing, 100)