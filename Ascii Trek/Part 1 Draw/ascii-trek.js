const density = "Ñ@W#$9876543210?!abc;:+=-,._ ";

let maggie;

function preload() {
    maggie = loadImage("../images/ascii-trek-maggie.jpg");
}

function setup() {
    createCanvas(1000, 1000);
    pixelDensity(1);
}

function draw() {
    background(0);
    //image(maggie, 0, 0, width, height);

    let w = width / maggie.width;
    let h = height / maggie.height;
    maggie.loadPixels();

    // Move the declaration of red, green, and blue variables outside the loop
    let red, green, blue;

    // PIXELS ARRAY - how to manipulate each individual pixel
    // formula: (x + y * width) * 4
    // source: http://y2u.be/nMUMZ5YRxHI
    // this nested loop will reach every pixel in the width and height
    for (let j = 0; j < maggie.height; j++) {
        for (let i = 0; i < maggie.width; i++) {
            const pixelIndex = (i + j * maggie.width) * 4;
            red = maggie.pixels[pixelIndex + 0]; // Update red, green, and blue values
            green = maggie.pixels[pixelIndex + 1];
            blue = maggie.pixels[pixelIndex + 2];
            // check the average of brightness from the rgb channels
            const avg = (red + green + blue / 3);
            
            // Draw squares inside the loop
            noStroke();
            fill(255);
            //square(i * w, j * h, w);
            //textSize(w);
            const lngth = density.length;
            const charIndex = floor(map(avg, 255, 0, lngth, 0));
            textAlign(CENTER, CENTER);
            text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
        }
    }
}