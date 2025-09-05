function setup() {
  createCanvas(1000, 500);
}

let xjogador1 = 0;
let xjogador2 = 0;

function draw() {
  background(220);
  textSize(40);
  text("🌚", xjogador1, 100);
  text("🌞", xjogador2, 150);
  rect(570, 0, 5, 500);
  
  function keyReleaser() {if (key == "a") {xjogador1 +=
    
  
  text("🏁", 565, 35);
  xjogador1 = xjogador1 + random(5);
  xjogador2 = xjogador2 + random(5);

  if (xjogador1 > 570) {
    text("jogador 1 venceu!!", 5, 100);
    noLoop();
  }
  if (xjogador2 > 570) {
    text("jogador 2 venceu!!", 5, 500);
    noLoop();
  
}                