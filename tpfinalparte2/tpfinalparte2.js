let juego;

function setup() {
createCanvas(640,480);
juego = new Juego();
}

function draw() {
  background(200);
juego.dibujar();
}
function mousePressed(){
juego.mousePressed();
}
