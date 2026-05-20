let yAtor = 366;
let xAtor = 100;

let colisao = false

let meusPontos = 0

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if(podeSeMover()){
      yAtor += 3;
    }
  }
}

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro,alturaCarro, xAtor,yAtor,15)
    if(colisao){
      voltaAtorParaPosicaoInicial()
      if(meusPontos > 0){  //diminui um ponto após a colisao
        meusPontos -=1
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){ //volta o ator para a posição inicial após colidir
  yAtor = 366
}

function incluiPontos(){
  textSize(25)
  fill(color(255,255,0))
  text(meusPontos, width /5, 27)
}

function marcaPonto(){
  if(yAtor<15){
    meusPontos += 1
    voltaAtorParaPosicaoInicial()
  }
}

function podeSeMover(){
  return yAtor < 366
}