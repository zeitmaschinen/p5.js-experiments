let progressBars = []; // Array que irá armazenar as barras.
const containerWidth = 800; // Definindo a largura do container fixo

//---- ATUALIZA AQUI:
let projectNames = ["UX strategy book", "Do more UX research", "Agile coaching course", "Teach a course"];
let progressPercentages = [65, 20, 25, 0];
//----

setup = () => {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 360, 1, 1, 1); // Define o modo de cor HSL para controlar as cores com facilidade.

  // Cria 4 barras de progresso em diferentes posições verticais.
  for (let i = 0; i < 4; i++) {
    let yPosition = (300 * 0.25) * (i + 1); // Calcula a posição vertical da barra (ajustada no draw).
    progressBars.push(new ProgressBar(0, containerWidth, yPosition, yPosition)); // Adiciona uma nova barra de progresso ao array progressBars.
  }
}

draw = () => {
  background(0, 0, 0, 1);

  // Centralizar as barras e os textos verticalmente
  let containerX = (width - containerWidth) / 2; // Centraliza o container horizontalmente.
  let topOffset = height * 0.3; // Começa a desenhar a partir de 30% da altura da tela.
  
  // Aplica a tradução para centralizar o container
  translate(containerX, topOffset);
  
  // Desenha o headline centralizado
  fill(255);
  textSize(20);
  textStyle(BOLD);
  textFont('Montserrat'); // Usa a fonte Montserrat carregada no HTML.
  textAlign(CENTER); // Centraliza o headline horizontalmente
  text("G R O W T H . 2 0 2 4", containerWidth / 2, -30); // Escreve o headline no topo, 30px acima da primeira barra

  // Renderiza cada barra de progresso com sua respectiva porcentagem e nome do projeto.
  for (let i = 0; i < 4; i++) {
    let yPosition = (300 * 0.25) * (i + 1); // Posição vertical da barra de progresso ajustada.
    progressBars[i].render(progressPercentages[i]); // Renderiza a barra de progresso.
    
    // Configura o estilo do texto para o nome do projeto.
    textSize(14);
    textStyle(NORMAL);
    textFont('Montserrat');
    fill(255);
    noStroke();
    
    textAlign(LEFT); // Alinha o texto à esquerda da barra
    text(projectNames[i], 0, yPosition - 24); // Escreve o nome do projeto 24px acima da barra.
  }
}

class ProgressBar {
  // O construtor da barra de progresso recebe as coordenadas para o início e o fim da barra no eixo X e a posição no eixo Y.
  constructor(_x1, _x2, _y1, _y2) {
    this.pBar = {
      x1: _x1, // Posição inicial no eixo X.
      x2: _x2, // Posição final no eixo X.
      y1: _y1, // Posição inicial no eixo Y (mesma posição para y2, pois a linha é reta).
      y2: _y2, // Posição final no eixo Y.
      col: 230 // Cor inicial da barra (matiz HSL).
    }
  }

  // Atualiza a barra com base na porcentagem.
  update(percentage) {
    this.pBar.curr = map(percentage, 0, 100, this.pBar.x1, this.pBar.x2); // Mapeia a porcentagem para o comprimento da barra.
    return this;
  }

  // Preenche a barra de progresso.
  fillBar() {
    stroke(230, 0.74, 0.58, 1); // cor de preenchimento.
    strokeWeight(20); // Define a espessura da barra.
    line(this.pBar.x1, this.pBar.y1, this.pBar.curr, this.pBar.y2); // Desenha a barra preenchida.
    return this;
  }

  // Desenha o fundo da barra de progresso.
  display() {
    stroke(231, 0.23, 0.3, 1); // cor do fundo.
    strokeWeight(20); // Define a espessura do fundo.
    line(this.pBar.x1, this.pBar.y1, this.pBar.x2, this.pBar.y2); // Desenha o fundo completo da barra.
    return this;
  }

  // Renderiza a barra de progresso (atualiza, exibe o contorno e preenche).
  render(percentage) {
    return this.update(percentage).display().fillBar();
  }
}