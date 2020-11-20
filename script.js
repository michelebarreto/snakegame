let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");//aqui ele vai tratar o arquivo como 2d
let box =32; // aqui esta determinando 32 pixel para cada quadradinho

//funcção para criar e desenhar o canvas
function criarBG(){
    context.fillStyle = "lightgreen"; //p fillStyle trabalha com o stilo
    context.fillRect(0,0,16 * box, 16 * box);// aqui está desenhando o retangulo onde acontece o jogo
}

// criando a cobrinha

criarBG();