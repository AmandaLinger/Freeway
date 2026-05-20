
let xCarros = [500,500,500];
let yCarros =[40,96,150,];
let velocidadeCarros = [2,2.5,3];

function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        image(imagemCarros[i],xCarros[i],yCarros[i],50,40)
    }
}

function movimentaCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i]
    }
}

function voltaPosicaoInicialDoCarro(){
    for(let i = 0; i < imagemCarros.length; i++)
    if(passouTodaTela(xCarros[i])){
        xCarros[i] = 500
    }
}

function passouTodaTela(xCarro){
    return xCarro<-50
}