let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");//aqui ele vai tratar o arquivo como 2d
let box =32; // aqui esta determinando 32 pixel para cada quadradinho
let snake =[];
snake[0]={
    x:8 * box,
    y:8 * box
    
}
// criando a variavel de direcionamento da cobrinha
let direction ="rigth";


//funcção para criar e desenhar o canvas
function criarBG(){
    context.fillStyle = "lightgreen"; //p fillStyle trabalha com o stilo
    context.fillRect(0,0,16 * box, 16 * box);// aqui está desenhando o retangulo onde acontece o jogo
}

// criando a cobrinha será um array de cordenadas, adiciona 1 elemento e retira o ultimo
function criarCobrinha(){
    for (i=0; i < snake.length;i++){
        context.fillStyle ="green";//aqui a cor da cobra será verde
        context.fillRect(snake[i].x,snake[i].y, box,box);//aqui configura o tamanho de x e y e box que sera o quadrado
    }

}
// criando a função para controlar o tempo
function iniciarJogo(){
//chamando as funções
criarBG();
criarCobrinha();
// criando o movimento de partida do ponto 0
let snakeX=snake[0].x;
let snakeY=snake[0].y;
//condições de direção da cobra(coordenadas)

if(direction == "rigtht") snakeX += box;// quando a cobra for na direção rigtht o snkeX(direita) acrescenta 1 quadrado
if(direction == "left") snakeX -= box;// quando a cobra for na direção left (esquerda)o snkeX decrementa 1 quadrado
if(direction == "up")snakeY -= box;
if(direction == "down")snakeY += box;

//retirando o ultimo elemento do array
snake.pop();
// esse metodo unshift sempre acrescenta uma cabeça a frente da cobra
let newHead = {
    x: snakeX,
    y: snakeY
}
snake.unshift(newHead);

}
// o setInterval é para determinar o tempo de iniciar o jogo a cada 100 milesegundos
let jogo = setInterval(iniciarJogo,100);

