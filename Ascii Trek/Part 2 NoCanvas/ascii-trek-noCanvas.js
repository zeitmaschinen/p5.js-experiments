const density = "Ñ@W#$9876543210?!abc;:+=-,. _";

let maggie;

function preload() {
    maggie = loadImage("../images/ascii-trek-maggie.jpg");
}

function setup() {
    noCanvas();
    maggie.loadPixels();
    for (let j = 0; j < maggie.height; j++) {
        let row = "";
        for (let i = 0; i < maggie.width; i++) {
            const pixelIndex = (i + j * maggie.width) * 4;
            const red = maggie.pixels[pixelIndex + 0];
            const green = maggie.pixels[pixelIndex + 1];
            const blue = maggie.pixels[pixelIndex + 2];

            // check the average of brightness from the rgb channels
            const avg = (red + green + blue) / 3;

            const len = density.length;
            const charIndex = floor(map(avg, 0, 255, len, 0));
      
            const c = density.charAt(charIndex);
            if (c == " ") row += "&nbsp;";
            else row += c;
        }
          createDiv(row);
    }
}     

  