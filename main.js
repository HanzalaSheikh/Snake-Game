const canvas = document.getElementById('game');
const ctx  = canvas.getContext('2d');


// all secondary f` or game features invoke in primary function drawGame`
// f`clearScreen to make black background 

function drawGame() {
    clearScreen()
    drawSnake()
    changeSnakePosition()
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

let xvelocity = 0;
let yvelocity = 0;

    document.onkeydown = function() {
        switch (window.event.keyCode) {
            case 37:
            xvelocity = -1;
            yvelocity = 0;// execute a function by passing parameter 
             break;
            case 38:
            xvelocity = 0;
            yvelocity = -1;// execute a function by passing parameter 
     
             break;
            case 39:
                xvelocity = 1;
                yvelocity = 0;// execute a function by passing parameter 
     
             break;
            case 40:
            yvelocity=0;
            xvelocity=1;  
            break;
        }
    };

    function changeSnakePosition(){
        headX = headX + xvelocity;
        headY = headY + yvelocity;
    }

    // ?prevent snake from moving opposite direction 

    function keyDown()
//up
{
    if(keyCode==38){

        if(yvelocity==1)
        return; //prevent snake from moving in opposite direction
        yvelocity=-1;
        xvelocity=0;

    }
    //down
    if(keyCode==40){
        if(yvelocity==-1)
        return;//prevent snake from moving in opposite direction
        yvelocity=1;
        xvelocity=0;
    }

//left
    if(keyCode==37){
        if(xvelocity==1)
        return;//prevent snake from moving in opposite direction
        yvelocity=0;
        xvelocity=-1;
    }
    //right
    if(keyCode==48){
        if(xvelocity==-1)
        return;//prevent snake from moving in opposite direcction
        yvelocity=0;
        xvelocity=1;
    }
}


drawGame();