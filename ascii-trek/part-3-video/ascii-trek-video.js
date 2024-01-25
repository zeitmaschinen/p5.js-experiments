const density = "Ñ@W#$9876543210?!abc;:+=-,._ ";

let video;
let asciiDiv;

function setup() {
    noCanvas();
    video = createCapture(VIDEO);
    video.size(150, 100);
    asciiDiv = createDiv();

}

    function draw() {
        video.loadPixels();
        let asciiImage = ""; 
        for (let j = 0; j < video.height; j++) {
            for (let i = 0; i < video.width; i++) {
                const pixelIndex = (i + j * video.width) * 4;
                const red = video.pixels[pixelIndex + 0];
                const green = video.pixels[pixelIndex + 1];
                const blue = video.pixels[pixelIndex + 2];

                // check the average of brightness from the rgb channels
                const avg = (red + green + blue) / 3;

                const len = density.length;
                const charIndex = floor(map(avg, 0, 255, len, 0));

                const c = density.charAt(charIndex);
                if (c == " ") asciiImage += "&nbsp;";
                else asciiImage += c;
            }
            asciiImage += "<br/>";
        }
    asciiDiv.html(asciiImage);
    }


