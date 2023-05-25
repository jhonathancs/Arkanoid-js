class Game {
  constructor() {
    // Obtendo referências para o canvas e o contexto 2D
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.rect = this.canvas.getBoundingClientRect();

    // Definindo a largura e altura do canvas
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    // Posição inicial da bola e velocidade
    this.x = this.width / 2;
    this.y = this.height - 40;
    this.dx = 2;
    this.dy = -2;

    // Raio da bola e dimensões da raquete
    this.ballRadius = 10;
    this.paddleHeight = 30;
    this.paddleWidth = 145;
    this.paddleX = (this.width - this.paddleWidth) / 2;

    // Configurações dos tijolos
    this.brickRowCount = 4;
    this.brickColumnCount = 14;

    this.brickWidth = 75;
    this.brickHeight = 20;
    this.brickPadding = 10;
    this.brickOffSetTop = 30;
    this.brickOffSetLeft = 30;
    this.bricks = [];

    // Criando a matriz de tijolos
    for (let c = 0; c < this.brickColumnCount; c++) {
      this.bricks[c] = [];
      for (let r = 0; r < this.brickRowCount; r++) {
      this.bricks[c][r] = {
          x: 0,
          y: 0,
          // tijolos que nao vao aparecer no codigo para formar nome
          status: (c !== 1 & c !==3 || r !== 1 ) ? 1 : 0,
        };
      }
    }
    // Pontuações do jogo
    this.score = 0;
  }

  drawBricks() {
    for (let c = 0; c < this.brickColumnCount; c++) {
      for (let r = 0; r < this.brickRowCount; r++) {
        if (this.bricks[c][r].status === 1) {
          const brickX =
            c * (this.brickWidth + this.brickPadding) + this.brickOffSetLeft;
          const brickY =
            r * (this.brickHeight + this.brickPadding) + this.brickOffSetTop;
          this.bricks[c][r].x = brickX;
          this.bricks[c][r].y = brickY;

          this.ctx.fillStyle = '#FFAA00'
          // this.ctx.fillStyle = this.bricks[c][r].color; // Usando a cor armazenada na propriedade color do tijolo
          this.ctx.fillRect(brickX, brickY, this.brickWidth, this.brickHeight);
        }
      }
    }
  }

  drawPaddle() {
    this.ctx.fillStyle = '#00AA00',
    this.ctx.fillRect(this.paddleX, this.height - this.paddleHeight, this.paddleWidth, this.paddleHeight)
  }

  drawBall() {
    this.ctx.fillStyle ='#00FF'
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y,this.ballRadius, 0, 2 * Math.PI)
    this.ctx.fill();
  }
}

let game = new Game();
game.drawBricks();
game.drawPaddle();
game.drawBall()
