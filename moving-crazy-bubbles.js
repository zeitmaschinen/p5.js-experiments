// global variables
let bubble1;
let bubble2;
let bubble3;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    ellipseMode(CENTER);
    // inside parenthesis are arguments for x, y, radius, r, g, b
    bubble1 = new Bubble(width, height, 400, 200, 0, 100);
    bubble2 = new Bubble(width, height, 300, 255, 190, 50);
    bubble3 = new Bubble(width, height, 200, 180, 0, 255);
}

function draw() {
    //background(20);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    bubble3.move();
    bubble3.show();
}

class Bubble {
    constructor(x, y, radius, r, g, b) {
        this.x = random(x);
        this.y = random(y);
        this.radius = random(radius); // radius
        this.r = random(r); // fill color random red
        this.g = random(g); // fill color random green
        this.b = random(b); // fill color random blue
    }
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
    show() {
        //strokeWeight(1);
        noStroke();
        //stroke(255);
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, this.radius);
    }
}

