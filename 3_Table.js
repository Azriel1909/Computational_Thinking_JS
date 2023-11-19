// Draw a table

// Ask the user

var height = prompt('Height: ') // 100
var width = prompt('Width: ') // 140

// Draw the columns / vertical lines

for (i = 0; i < 5 + 1; i++) {
    pendown()
    forward(height)
    penup()
    left(180)
    forward(height)
    left(90)
    forward(width/5)
    left(90)
}

// Move turtle back to the starting position

left(90)
forward(width + (width / 5))
left(180)

// Draw the rows / horizontal lines

for (i = 0; i < 4 + 1; i++) {
    pendown()
    forward(width)
    penup()
    right(180)
    forward(width)
    right(90)
    forward(height/4)
    right(90)
}
