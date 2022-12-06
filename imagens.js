//Imagens e sons do jogo
let imagemDaEstrada;
let imagemDoAtor
let imagemCarro
let imagemCarro2
let imagemCarro3

let somDaTrilha
let somDaColisao
let somDoPonto

function preload(){
    imagemDaEstrada = loadImage("material/estrada.png")
    imagemDoAtor = loadImage("material/ator-1.png")
    imagemCarro = loadImage("material/carro-1.png")
    imagemCarro2 = loadImage("material/carro-2.png")
    imagemCarro3 = loadImage("material/carro-3.png")
    imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
    somDaTrilha = loadSound("sons/trilha.mp3")
    somDaColisao = loadSound("sons/colidiu.mp3")
    somDoPonto = loadSound("sons/pontos.wav")
}
