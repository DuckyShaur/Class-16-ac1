
var box1;

function setup() {
  createCanvas(600, 400);
  box1 = new Box()
  box2 = new Box()
}

function draw() {
  background(220);
box1.show()
box1.width_box(35)
box2.show()
box2.width_box(10)
}

