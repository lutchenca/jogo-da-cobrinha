let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

let direction = "right";

function criarCobrinha() {
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo () {
    criarBG();
    criarCobrinha();

    let snakeX =  snake[0].x; // posicao inicial
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;    //coordenadas da cobra
    if(direction == "left") snakeX -= box;    //coordenadas da cobra
    if(direction == "up") snakeY -= box;    //coordenadas da cobra
    if(direction == "down") snakeY += box;
    
    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);
