let spokeAngle = 0
const spokeLength = 30
const spokeIncrement = 15
let count = 0

function movingPart(){
  angle( spokeAngle )
  goto( 0,0 )
  forward( spokeLength )
  
  spokeAngle = spokeAngle + spokeIncrement
  count = count + 1
  
  if( count > 30 ){
    stopAnimate()
  }
}

function myDraw(){
  redrawOnMove( false )
  clear()
  movingPart()
  redrawOnMove( true )
}

reset()
hideTurtle()
animate( myDraw, 100 )