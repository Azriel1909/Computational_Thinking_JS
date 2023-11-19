// * Brainstorm

/*

What I would like to draw:
I would like to draw a kind of flower

What I know can be drawn:
some basic figures

Ideas that I think may be possible:
It is possible to draw some curves

*/

// * Specify

// - Stage 1: Draw a circle in the starting place (center).

// -- Version A
// - Stage 2: Base on the circle, draw vertical lines around the cicle.

// -- Version B
// - Stage 3: Base on the circle, draw big circles around the base circle.

// * Design

// - For a drawing, first I must identify the center (starting place of the turtle), then, I draw a big circle where all the petals join to. Finally, base on the big circle I start drawing all the petals around the circle base.

// * Implement

// Part 1: Big circle
pendown()
for(i=0; i<90; i++) {
  forward(1)
  right(4)
}