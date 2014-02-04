var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

var click = false;


var wall = new block(width/10, 0, 32, 32);
var ball = new block(wall.x, 0, 4, 4);
var posMouse = new coord(0, 0);

function mouse(event) {
  posMouse.x = event.clientX
  posMouse.y = event.clientY
}

window.addEventListener("click", getPosition, false);

function getPosition(event) {
    click = true;
} 

function update() {
    if (posMouse.y > height) posMouse.y = height - wall.height; 
    if (posMouse.y > height - wall.height) posMouse.y = height - wall.height;
    
    wall.y = posMouse.y - (wall.height / 2);
    
    if (wall.y < 0) wall.y = 0;
    if (wall.y > height) wall.y = height;
    
    if (click) ball.x++;
    ball.y = wall.y + (wall.height/2);
}

function render() {
    //cls
    ctx.clearRect (0 ,0 ,width , height);
    
    //pixel
    ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    
    ctx.fillRect(ball.x, ball.y, ball.width, ball.height);

}

function block(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

function coord(x, y) {
    this.x = x;
    this.y = y;
}


setInterval(function() {
    update();
    render();
}, 1);