let imagemEstrada;
let imagemDoAtor;
let imagemCarro;


//variavel do ator
let yAtor = 366;

//variaveis do carro
let xCarro = 450;

function preload(){
  imagemEstrada = loadImage("img/estrada.png");
  imagemDoAtor = loadImage("img/ator-1.png");
  imagemCarro = loadImage("img/carro-1.png");
}

function setup(){
  createCanvas(500, 400);
}

function mostraAtor(){
  image(imagemDoAtor, 100, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 3;
  }
}

function mostraCarro(){
    image(imagemCarro,xCarro,40,50,40)
}

function movimentaCarro(){
    xCarro -= 2
}

function draw(){
  background(imagemEstrada);
  mostraAtor()
  mostraCarro()
  movimentaCarro()
  movimentaAtor()
}