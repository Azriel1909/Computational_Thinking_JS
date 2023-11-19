// Draw a table

// Draw the columns / vertical lines

for (i = 0; i < 5 + 1; i++) {
    pendown()
    forward(100)
    penup()
    right(180)
    forward(100)
    left(90)
    forward(140/5)
    left(90)
}

// Move turtle back to the starting position

left(90)
forward(140 + (140 / 5))
left(180)

// Draw the rows / horizontal lines

for (i = 0; i < 4 + 1; i++) {
    pendown()
    forward(100)
    penup()
    right(180)
    forward(100)
    left(90)
    forward(140/5)
    left(90)
}