class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = ctx == canvas.getContext("2d") ? ctx : canvas.getContext("2d");
    this.motion = {
      speed: 5,
      drift: false
    };
    this.player = new Player(this);
  }
  start() {
    return requestAnimationFrame(this.cycle);
  }
  cycle() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

class GameObject {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.canvas = this.game.canvas;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = { x: 0, y: 0 };
  }
}

class Player extends GameObject {
  constructor(game, x, y, width, height) {
    super(game, x, y, width, height);
  }
}