let x;
let speedX;
let y;
let speedY;
function setup() {
  createCanvas(400, 400);
  x = random(0, 325);
  speedX = random(5, 10);
  y = random(0, 325);
  speedY = random(5, 10);
}

function draw() {
  background("hsl(5,70%,50%)");
  // spriteBall();
  helloSkeleton(x, y, 0.3);
  x = x + speedX;
  y = y + speedY;

  if (x >= 325 || x <= 0) {
    speedX = speedX * -1;
  }
  if (y >= 310 || y <= 0) {
    speedY = speedY * -1;
  }
}

function spriteBall() {
  fill("seagreen");
  noStroke();
  ellipse(x, y, 50);
  //console.log(x,y)
}

function helloSkeleton(x, y, size) {
  ellipseMode(CORNER);
  fill("lightyellow");
  noStroke();

  translate(x, y);
  scale(size);

  ellipse(0, 0, 250);
  rect(50, 150, 150);
  fill("hsl(220,10%,30%)");
  ellipse(140, 110, 65, 60);
  ellipse(40, 110, 65, 60);

  triangle(120, 190, 125, 160, 130, 190);
  stroke("hsl(220,10%,30%)");
  line(50, 250, 200, 250);
  line(50, 251, 200, 251);
  line(50, 252, 200, 252);

  line(80, 230, 80, 300);
  line(110, 230, 110, 300);
  line(140, 230, 140, 300);
  line(170, 230, 170, 300);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = speedX = speedX * -1;
  } else if (keyCode === RIGHT_ARROW) {
    value = speedX = speedX * -1;
  }
  if (keyCode === UP_ARROW) {
    value = speedY = speedY * -1;
  } else if (keyCode === DOWN_ARROW) {
    value = speedY = speedY * -1;
  }
}
