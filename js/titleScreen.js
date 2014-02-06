//canvas
var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');

//vars
var levelName = "";

var width = canvas.width;
var height = canvas.height;

//bg
var bg = "";
var Sprite;

//level1
function titleScreen(level, bg) {
    Sprite = new Image();
    Sprite.src = bg;
    levelName = level;
}

function renderL0() {
    //ctx.drawImage(Sprite, 0, 0);
    ctx.fillText("@" + levelName, width / 2, height / 2);
}

function updateL0() {
    
}