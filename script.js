let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");//aqui ele vai tratar o arquivo como 2d
let box =32; // aqui esta determinando 32 pixel para cada quadradinho
let snake =[];
snake[0]={
    x:8 * box,
    y:8 * box
}
// criando a variavel de direcionamento da cobrinha
let direction ="right";
let food ={
    //o math flor tira o retira o ponto flutuante, tirando a , depois do número
    //o Math random gera numeros aleatorios
    x: Math.floor(Math.random() *15 + 1)* box,
    y:Math.floor(Math.random() * 15 +1)*box,
}


//funcção para criar e desenhar o canvas
function criarBG(){
    context.fillStyle = "lightgreen"; //p fillStyle trabalha com o stilo
    context.fillRect(0, 0, 16 * box, 16 * box);// aqui está desenhando o retangulo onde acontece o jogo
}

// criando a cobrinha será um array de cordenadas, adiciona 1 elemento e retira o ultimo
function criarCobrinha(){
    for (i=0; i < snake.length; i++){
        context.fillStyle ="green";//aqui a cor da cobra será verde
        context.fillRect(snake[i].x,snake[i].y, box,box);//aqui configura o tamanho de x e y e box que sera o quadrado
    }
}
//criando a funcção comidinha
function drawFood(){
    context.fillStyle = "red";
    context.fillRect (food.x, food.y, box, box);
}

//evento para capturar o movimento do teclado, o keydown pega o evento de click do teclado
document.addEventListener('keydown', update);

function update(event){
    // direções (37 direita)(38 pra baixo)(39 esquerda)(40 pra cima)
    //rigth direita - down pra baixo - left esquerda - up pra cima 
    if(event.keyCode == 37 && direction != "right") direction ="left";
    if(event.keyCode == 38 && direction != "down") direction= "up";
    if(event.keyCode == 39 && direction != "left") direction= "right";
    if(event.keyCode == 40 && direction != "up") direction= "down";

}
// criando a função para controlar o tempo
function iniciarJogo(){
    // se a cobra o valor da cabeça na posição x for maior que 15, se a direção for pra direita ela recebe o valor de 0 e volta da esquerda pra direita novamente
    //aqui é a logica para a cobra rodar e traspassar todo o box
    if(snake[0].x > 15 * box && direction == "right")snake[0].x = 0;
    if(snake[0].x < 0 && direction =="left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y=0;
    if(snake[0].y < 0 && direction =="up") snake[0].y = 16 * box;

//criando for para condição de quando a cobra se chocar terminar o jogo
for(i=1; i < snake.length; i++){
    if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
        clearInterval(jogo);
        alert("Game Over :( ");

    }
}




//chamando as funções
criarBG();
criarCobrinha();
drawFood();
// criando o movimento de partida do ponto 0
let snakeX=snake[0].x;
let snakeY=snake[0].y;
//condições de direção da cobra(coordenadas)

if(direction == "right") snakeX += box;// quando a cobra for na direção rigtht o snkeX(direita) acrescenta 1 quadrado
if(direction == "left") snakeX -= box;// quando a cobra for na direção left (esquerda)o snkeX decrementa 1 quadrado
if(direction == "up")snakeY -= box;
if(direction == "down")snakeY += box;

//AQUI se snakeX for diferente de food.x e a posição snakeY seja diferente de food.y ela vai retirar o ultimo elemento da cobrinha, caso não ela vai aumentar
if(snakeX != food.x || snakeY != food.y){
   //retirando o ultimo elemento do array
snake.pop();
}else{
     food.x = Math.floor(Math.random() *15 + 1)* box;
     food.y = Math.floor(Math.random() * 15 + 1)* box;

}
// esse metodo unshift sempre acrescenta uma cabeça a frente da cobra
let newHead = {
    x: snakeX,
    y: snakeY
}

snake.unshift(newHead);

}
// o setInterval é para determinar o tempo de iniciar o jogo a cada 100 milesegundos
let jogo = setInterval(iniciarJogo,100);

