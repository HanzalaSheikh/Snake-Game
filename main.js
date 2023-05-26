const canvas = document.getElementById('game');
const ctx  = canvas.getContext('2d');


// all secondary f` or game features invoke in primary function drawGame`
// f`clearScreen to make black background 

function drawGame() {
    clearScreen()
}

function clearScreen(){
    ctx.fillStyle = 'skyblue'
    ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight) // black color start from 0px left, right to canvas width and canvas height
}


 drawGame();
