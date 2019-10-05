const canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext("2d");


// global varaiables
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

var paddleHeight = 10;
var paddleWidth = 75;
paddleX = (canvas.width - paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 5;
var brickColumnCount = 3;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3;
var brick = [];

for(c=0; c<brickColumnCount;c++){
    brick[c] = [];
    for(r=0;r<brickRowCount;r++){
        bricks[c][r] = {x:0, y:0, status:1}   
     }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyupHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPresssed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}