class Juego {
  constructor(){
    this.jugador1 = new Jugador();
    this.jugador2 = new Jugador();
    this.mesa = new Mesa();
    this.mazo = new Mazo();
    
    this.repartirCartas();
  }
  
  dibujar(){
    this.jugador1.dibujar(20);
    this.mesa.dibujar();
    this.jugador2.dibujar(300);
  }
  
  repartirCartas(){
    this.jugador1.darCarta(this.mazo.obtenerCarta());
    this.jugador1.darCarta(this.mazo.obtenerCarta());
    this.jugador1.darCarta(this.mazo.obtenerCarta());
    
    this.jugador2.darCarta(this.mazo.obtenerCarta());
    this.jugador2.darCarta(this.mazo.obtenerCarta());
    this.jugador2.darCarta(this.mazo.obtenerCarta());
  }
  
  mousePressed(){
    if (mouseX > 100 && mouseY > 100){
  let carta = this.jugador1.obtenerCartaAlHacerClick();
    }
      //if(carta !== null){
      //  this.mesa.agregarCarta(carta, 1);
  }
}
