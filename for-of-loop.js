function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    let nums = [50, 100, 200, 300, 400]; // Array of numbers

    // Using the for...of loop to iterate over the values in the nums array
    for (let shape of nums) {
        fill(255);
        strokeWeight(1);
        ellipse(shape, 200, shape, shape); // Draw a shape (ellipse) at the specified position with width and height based on the current value in nums
    }

    stroke(0);
    strokeWeight(2);
    noFill();
    rect(0, 0, 400, 400); // Draw a rectangle that frames the canvas
}