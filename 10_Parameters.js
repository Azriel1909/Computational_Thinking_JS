// my functions

// - Rectangle

function myRectangle(x , y, width, height) {
  goto(x,y)
  angle(0)
  pendown()
  // forward(height)
  // right(90)
  // forward(width)
  // right(90)
  // forward(height)
  // right(90)
  // forward(width)
  // right(90)
  for(i=0; i<2; i++){
    forward(height)
    right(90)
    forward(width)
    right(90)
  }
  penup()
}

function drawAWindow(width){
  angle(0)
  pendown()
  for(i=0;i<4;i++){
    forward(width)
    right(90)
  }
  penup()
}

function drawWindows(x,y){
  goto(x,y)
  angle(0)
  pendown()
  drawAWindow(20)
}

function myHouse(x,y,w,h){
  // Wall
  myRectangle(x,y,w,h)
  // Door
  myRectangle(x+40,y,w/5,h/4)
  
  // Windows
  drawWindows(x+0,y+30)
  drawWindows(x+80,y+30)
  drawWindows(x+80,y+80)
  drawWindows(x+0,y+80)
}

// main program

// // Wall
// myRectangle(0 , 0, 100, 150)

// // Door
// myRectangle(40 , 0, 20, 50)

// // Windows
// drawWindows(0,30)
// drawWindows(80,30)
// drawWindows(80,80)
// drawWindows(0,80)

myHouse(0, 0, 100, 150)
myHouse(150, 150, 100, 150)