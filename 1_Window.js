// How to draw a window

let w = prompt('Width: ')
let h = prompt('Height: ')

pendown()
forward(h)
right(90)
forward(w)
right(90)
forward(h)
right(90)
forward(w)
right(90)

penup()
forward(h/2)
right(90)
pendown()
forward(w)

alert('That is the drawing finished!')


