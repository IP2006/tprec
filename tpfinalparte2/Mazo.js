class Mazo{
constructor(){
  this.cartas = [];
  for(let i = 0; i <10; i++){
  this.cartas.push(new Carta("DIAMANTE", i+1));
  }
  for(let i = 0; i <10; i++){
  this.cartas.push(new Carta("TREBOL", i+1));
  }
  for(let i = 0; i <10; i++){
  this.cartas.push(new Carta("PICA", i+1));
  }
  for(let i = 0; i <10; i++){
  this.cartas.push(new Carta("CORAZON", i+1));
}
}
obtenerCarta(){
return this.cartas[round(random(0,40))];
}
}
