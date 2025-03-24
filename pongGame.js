let paleta1, paleta2;
let pelota;
let puntaje1 = 0, puntaje2 = 0;
let puntajeMaximo = 10;

function setup() {
  createCanvas(800, 400);
  paleta1 = new Paleta(10);
  paleta2 = new Paleta(width - 70);
  pelota = new Pelota();
}

function draw() {
  background(0);
  
  paleta1.mostrar();
  paleta2.mostrar();
  paleta1.mover();
  paleta2.mover();
  
  pelota.actualizar();
  pelota.mostrar();
  pelota.verificarPaleta(paleta1);
  pelota.verificarPaleta(paleta2);
  
  fill(255);
  textSize(32);
  text(puntaje1, width / 4, 50);
  text(puntaje2, (3 * width) / 4, 50);
  
  if (puntaje1 >= puntajeMaximo || puntaje2 >= puntajeMaximo) {
    textAlign(CENTER, CENTER);
    text("Juego Terminado", width / 2, height / 2);
    noLoop();
  }
}

function keyPressed() {
  if (key === 'W' || key === 'w') paleta1.direccion = -1;
  if (key === 'S' || key === 's') paleta1.direccion = 1;
  if (keyCode === UP_ARROW) paleta2.direccion = -1;
  if (keyCode === DOWN_ARROW) paleta2.direccion = 1;
}

function keyReleased() {
  if (key === 'W' || key === 'w' || key === 'S' || key === 's') paleta1.direccion = 0;
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) paleta2.direccion = 0;
}