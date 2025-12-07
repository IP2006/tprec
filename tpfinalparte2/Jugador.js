class Jugador{
constructor(){
    this.mano = [];
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
  
  //revisar después
  calcularPuntos() {
    let total = 0;
    for (let carta of this.mano) {
      total += carta.obtenerValor();
    }
    return total;
  }  
}
