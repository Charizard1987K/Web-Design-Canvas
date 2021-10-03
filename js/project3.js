function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225);
    fill(35, 50, 240);
    ellipse(mouseX, mouseY, 50, 50);
    ellipse(mouseX+0, mouseY+13, 40, 10);
    ellipse(mouseX, mouseY, 10, 10);
    ellipse(mouseX, mouseY, 10, 10);
    ellipse(mouseX+10, mouseY-10, 10, 10);
    ellipse(mouseX-10, mouseY-10, 10, 10);

    fill(35, 50, 240);
    ellipse(mouseX, mouseY, 50, 50);
    ellipse(mouseX+0, mouseY+13, 40, 10);
    ellipse(mouseX, mouseY, 10, 10);
    ellipse(mouseX, mouseY, 10, 10);
    ellipse(mouseX+10, mouseY-10, 10, 10);
    ellipse(mouseX-10, mouseY-10, 10, 10);
  
  fill(35, 50, 240);
    ellipse(mouseX, mouseY, 50, 50);
    ellipse(mouseX+0, mouseY+13, 40, 10);
    ellipse(mouseX, mouseY, 10, 10);
    ellipse(mouseX, mouseY, 10, 10);
    ellipse(mouseX+10, mouseY-10, 10, 10);
    ellipse(mouseX-10, mouseY-10, 10, 10);
  
  fill(35, 50, 240);
    ellipse(mouseX, mouseY, 50, 50);
    ellipse(mouseX+0, mouseY+13, 40, 10);
    ellipse(mouseX, mouseY, 10, 10);
    ellipse(mouseX, mouseY, 10, 10);
    ellipse(mouseX+10, mouseY-10, 10, 10);
    ellipse(mouseX-10, mouseY-10, 10, 10);
  //second ball
    ellipse(mouseY, mouseX, 50, 50);
  //third ball
      ellipse(mouseY+200, mouseX, 50, 50);
  //fourth ball
  ellipse(mouseY, mouseX-200, 50, 50);
}
