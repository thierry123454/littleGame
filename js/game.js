var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

var wall = new block(0,0,32,32);

function update() {
    wall.x++;
    wall.y++;
}

function render() {
    //cls
    ctx.clearRect ( 0 , 0 , width , height );
    
    //pixel
    ctx.fillRect(wall.x, wall.y, wall.width, wall.height);

}

function block(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}


setInterval(function() {
    update();
    render();
}, 1);