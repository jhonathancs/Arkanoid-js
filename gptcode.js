// Função para carregar o mapa de tijolos
function loadMap() {
    bricks = [
      new Brick(50,50,50,10,"blue"),
      new Brick(101,50,50,10,"blue"),
      new Brick(152,50,50,10,"blue"),
      new Brick(203,50,50,10,"blue"),
      new Brick(254,50,50,10,"blue"),
      new Brick(305,50,50,10,"blue"), // Row 1
      // new Brick(305,50,50,10,"blue")
      new Brick(101,61,50,10,"green"),
      new Brick(152,61,50,10,"green"),
      new Brick(203,61,50,10,"green"),
      new Brick(254,61,50,10,"green"),
      new Brick(305,61,50,10,"green"), // Row 2
      // new Brick(50,72,50,10,"darkcyan"),
      new Brick(101,72,50,10,"darkcyan"),
      new Brick(152,72,50,10,"darkcyan"),
      new Brick(203,72,50,10,"darkcyan"),
      new Brick(254,72,50,10,"darkcyan"),
      new Brick(305,72,50,10,"darkcyan"), // Row 3
      new Brick(50,83,50,10,"coral"),
      new Brick(101,83,50,10,"coral"),
      new Brick(152,83,50,10,"coral"),
      new Brick(203,83,50,10,"coral"),
      new Brick(254,83,50,10,"coral"),
      new Brick(305,83,50,10,"coral"), // Row 4
      new Brick(50,94,50,10,"darkolivegreen"),
      new Brick(101,94,50,10,"darkolivegreen"),
      new Brick(152,94,50,10,"darkolivegreen"),
      new Brick(203,94,50,10,"darkolivegreen"),
      new Brick(254,94,50,10,"darkolivegreen"),
      new Brick(305,94,50,10,"darkolivegreen"), // Row 5
      new Brick(50,105,50,10,"lightsteelblue"),
      new Brick(101,105,50,10,"lightsteelblue"),
      new Brick(152,105,50,10,"lightsteelblue"),
      new Brick(203,105,50,10,"lightsteelblue"),
      new Brick(254,105,50,10,"lightsteelblue"),
      new Brick(305,105,50,10,"lightsteelblue")  // Row 6
    ];
  }
  
  // Definição da classe Game
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
      this.paddleHeight = 10;
      this.paddleWidth = 145;
      this.paddleX = (this.width - this.paddleWidth) / 2;
    
      // Configurações dos tijolos
      this.brickRowCount = 6;
      this.brickColumnCount = 6;
    
      this.brickWidth = 50;
      this.brickHeight = 10;
      this.brickPadding = 1;
      this.brickOffsetTop = 30;
      this.brickOffsetLeft = 30;
      this.bricks = [];
  
      // Carregar o mapa de tijolos
      loadMap();
      // Pontuações do jogo
      this.score = 0;
    }
    
    drawBricks() {
      for (let c = 0; c < this.brickColumnCount; c++) {
        for (let r = 0; r < this.brickRowCount; r++) {
          if (bricks[c][r].status === 1) {
            const brickX = (c * (this.brickWidth + this.brickPadding)) + this.brickOffsetLeft;
            const brickY = (r * (this.brickHeight + this.brickPadding)) + this.brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
    
            this.ctx.beginPath();
            this.ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
            this.ctx.fillStyle = bricks[c][r].color;
            this.ctx.fill();
            this.ctx.closePath();
          }
        }
      }
    }
  }
  
  // Criação da instância do jogo e chamada do método para desenhar os tijolos
  let game = new Game();
  game.drawBricks();
  