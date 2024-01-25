let bubbles = [];

function setup() {
    createCanvas(600, 400);
}

function mousePressed() {
    let sizes = random(5, 100);
    let b = new Bubble(mouseX, mouseY, sizes);
    //bubbles[0] = b; // "in the first spot of the array, place b"
    bubbles.push(b); // array function to push anything new to the array
}

function draw() {
    background(0);
    for (i=0; i<bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
    }
  
    move() {
      this.x = this.x + random(-3, 3);
      this.y = this.y + random(-3, 3);
    }
  
    show() {
      stroke(0);
      strokeWeight(1);
      fill(255, 0, 200, 200); //with alpha
      ellipse(this.x, this.y, this.r * 2);
    }
  }
  