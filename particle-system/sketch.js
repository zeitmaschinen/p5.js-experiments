let ps = []; 

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 255);
}

function draw() {
  background(0);
  
if (abs(pmouseX - mouseX) > 0 || abs(pmouseY - mouseY) > 0) {
    ps.push(new System(mouseX, mouseY));
  }

    // Adiciona sistemas de partículas em posições aleatórias
if (frameCount % 5 === 0) { // A cada 10 frames, cria um novo sistema
    let randomX = random(width);
    let randomY = random(height);
    ps.push(new System(randomX, randomY));
}
  
  for (let i=ps.length-1; i>=0; i--) {
    ps[i].update();
    ps[i].display();
    
    if (ps[i].done) {
      ps.splice(i, 1);
    }
  }
}