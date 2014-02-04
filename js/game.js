//canvas
var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');

//vars
var width = canvas.width;
var height = canvas.height;

var click = false;

var wall = new block(width / 10, 0, 32, 32, "#000"); //player
var ball = new block(wall.x, 0, 4, 4, "red"); //bulit
var posMouse = new coord(0, 0); //mouse

//mouse coords event
function mouse(event) {
  posMouse.x = event.clientX
  posMouse.y = event.clientY
}

//click
window.addEventListener("click", getPosition, false);

function getPosition(event) {
    click = true;
} 

//update
function update() {
    if (posMouse.y > height) posMouse.y = height - wall.height; 
    if (posMouse.y > height - wall.height) posMouse.y = height - wall.height;
    
    wall.y = posMouse.y - (wall.height / 2);
    
    if (wall.y < 0) wall.y = 0;
    if (wall.y > height) wall.y = height;
    
    if (click) {
        ball.x++;
    } else {
      ball.y = wall.y + (wall.height/2);  
    }
    
    if (ball.x > width + 10) {
        click = false;
        ball.x = wall.x;
    }
}

//render
function render() {
    //cls
    ctx.clearRect (0 ,0 ,width , height);
    
    //bulit
    ctx.fillStyle=ball.color;
    ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
    
    //player
    ctx.fillStyle=wall.color;
    ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    
    //txt
    //ctx.fillText("click=" + click, 100, 100);

    ctx.fillStyle="#000";
}

//entity
function block(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
}

//x, y
function coord(x, y) {
    this.x = x;
    this.y = y;
}

//intervall
setInterval(function() {
    update();
    render();
}, 1);