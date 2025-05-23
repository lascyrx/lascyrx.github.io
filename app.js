const canvas = document.getElementById("game"), ctx = canvas.getContext("2d");

let hs = document.getElementById("hs"), highscore = localStorage.hs / 1 || 0;
localStorage.hs = highscore;
hs.innerHTML = highscore;

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
addEventListener("resize", resize);

const game = new Game(canvas);
game.render = game.start();