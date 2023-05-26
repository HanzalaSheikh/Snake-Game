const canvas = document.getElementById('game');
const ctx  = canvas.getContext('2d');


// all secondary f` or game features invoke in primary function drawGame`
// f`clearScreen to make black background 

function drawGame() {
    clearScreen()
    drawSnake()

    let speed= 7; // interval will be seven times a second
    setTimeout(drawGame, 1000/speed); // screen will update 7 times a sec
}

function clearScreen(){
    ctx.fillStyle = 'skyblue'
    ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight) // black color start from 0px left, right to canvas width and canvas height
}

let tileCount = 20;
let headX = 10;
let tileSize =18;
let headY= 10;

function drawSnake(){
    ctx.fillStyle = 'orange';
    ctx.fillRect(headX* tileCount,headY* tileCount,tileCount,tileSize);
}

drawGame();