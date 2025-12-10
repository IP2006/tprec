let juego;
//let madera;

//function preload() {
//  soundFormats('mp3');

//  cancion = loadSound('data/musica_de_fondo.mp3');
//  audioClick = loadSound('data/carta.mp3');
//  madera = loadImage('data/mesa.jpg');
//}

function setup() {
createCanvas(640,480);
juego = new Juego();
}

function draw() {
  background(200);
juego.dibujar();
}
function mousePressed(){
juego.pedir();
}
