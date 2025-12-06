class Jugador{
constructor(){
  this.posY;
  this.cartas=[];
}

  darCarta(carta){
    this.cartas.push(carta);
}
dibujar(posY){
  for(let i=0; i<this.cartas.length;i++){
  this.cartas[i].dibujar(100+(i*80), posY);
  }
}
  obtenerCartaAlHacerClick(){
    for(let i=0; i<this.cartas.length;i++){
        return this.cartas[i];
        }
  }
}
